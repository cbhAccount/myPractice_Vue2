<template>
  <div class="s-canvas">
    <canvas
      @click="getcode"
      id="s-canvas"
      :width="contentWidth"
      :height="contentHeight"
    ></canvas>
  </div>
</template>
<script>
export default {
  name: 'VerificationCode',
  props: {
    code: {
      type: Object
    }
  },
  data () {
    return {
      fontSizeMin: 40,
      fontSizeMax: 40,
      backgroundColorMin: 180,
      backgroundColorMax: 240,
      colorMin: 50,
      colorMax: 160,
      lineColorMin: 40,
      lineColorMax: 180,
      dotColorMin: 0,
      dotColorMax: 255,
      contentWidth: this.code.contentWidth,
      contentHeight: 40,
      timerId: null
    }
  },
  methods: {
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    randomColor (min, max) {
      const r = this.randomNum(min, max)
      const g = this.randomNum(min, max)
      const b = this.randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    drawPic () {
      const canvas = document.getElementById('s-canvas')
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = this.randomColor(
        this.backgroundColorMin,
        this.backgroundColorMax
      )
      ctx.strokeStyle = this.randomColor(
        this.backgroundColorMin,
        this.backgroundColorMax
      )
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
      ctx.strokeRect(0, 0, this.contentWidth, this.contentHeight)
      for (let i = 0; i < this.code.randomNum.length; i++) {
        this.drawText(ctx, this.code.randomNum[i], i)
      }
      this.drawLine(ctx)
      this.drawDot(ctx)
    },
    drawText (ctx, txt, i) {
      ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
      ctx.font =
        this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
      ctx.textBaseline = 'alphabetic'
      const x = (i + 1) * (this.contentWidth / (this.code.randomNum.length + 1))
      const y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
      const deg = this.randomNum(-45, 45)
      ctx.translate(x, y)
      ctx.rotate((deg * Math.PI) / 180)
      ctx.fillText(txt, 0, 0)
      ctx.rotate((-deg * Math.PI) / 180)
      ctx.translate(-x, -y)
    },
    drawLine (ctx) {
      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = this.randomColor(
          this.lineColorMin,
          this.lineColorMax
        )
        ctx.beginPath()
        ctx.moveTo(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight)
        )
        ctx.lineTo(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight)
        )
        ctx.stroke()
      }
    },
    drawDot (ctx) {
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight),
          1,
          0,
          2 * Math.PI
        )
        ctx.fill()
      }
    },
    getcode () {
      this.drawPic()
      this.$emit('childEvent')
    }
  },
  watch: {
    'code.randomNum' () {
      this.drawPic()
    },
    'code.contentWidth' (value) {
      this.contentWidth = Math.floor(value)
      this.drawPic()
      this.$message.warning(`${this.contentWidth}`)
    }
  },
  mounted () {
    this.drawPic()
  }
}
</script>
