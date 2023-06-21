class Hangman {
  constructor() {
    this.parts = [
      [29, 247, 126, 247],
      [77, 246, 77, 77],
      [77, 77, 185, 77],
      [185, 77, 185, 137],
      [186, 151],
      [185, 168, 185, 209],
      [185, 209, 169, 234],
      [185, 209, 197, 235],
    ];
    this.partNumber = 0;
  }
  writePart() {
    const canvas = document.querySelector('#imageView');
    const context = canvas.getContext('2d');
    if (this.partNumber >= this.parts.length) {
      return;
    } else if (this.partNumber === this.parts.length - 1) {
      const infoText = 'Przegrałeś!';
      const fontSize = 30;
      const textWidth = context.measureText(infoText).width;
      const x = (canvas.width - textWidth) / 2;
      const y = (canvas.height + fontSize) / 2;
      context.font = `bold ${fontSize}px Arial`;
      context.fillStyle = 'red';
      context.fillText(infoText, x, y);
    }
    const [startX, startY, endX, endY] = this.parts[this.partNumber];

    context.strokeStyle = '#000000';
    if (this.partNumber === 4) {
      context.save();
      context.translate(startX, startY);
      context.scale(1, 1);
      context.beginPath();
      context.arc(0, 0, 14, 0, 6.283185307179586, false);
      context.stroke();
      context.closePath();
      context.restore();
    } else {
      context.lineWidth = 6;
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
      context.closePath();
    }
    this.partNumber++;
  }
}

export default Hangman;
