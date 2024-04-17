class Terrain {
    constructor(type) {
        switch (type) {
            case 'water':
                this.minHeight = 0.2
                this.maxHeight = 0.4
                this.minColor = color(30, 176, 251)
                this.maxColor = color(40, 255, 255)
                break

            case 'sand':
                this.minHeight = 0.4
                this.maxHeight = 0.5             
                this.minColor = color(215, 192, 158)
                this.maxColor = color(255, 246, 193)
                break

            case 'grass':
                this.minHeight = 0.5
                this.maxHeight = 0.7
                this.minColor = color(2, 166, 155)
                this.maxColor = color(118, 239, 124)
                break

            case 'trees':
                this.minHeight = 0.7
                this.maxHeight = .75
                this.minColor = color(22, 181, 141)
                this.maxColor = color(10, 145, 113)
                break
        }
    }

    #normalize(min, max, value) {
        if (value < min) return 0
        if (value > max) return 1
        
        return (value - min) / (max - min)
    }

    getColorByNoiseValue(value) {
        const normalized = this.#normalize(this.minHeight, this.maxHeight, value)
        
        return lerpColor(this.minColor, this.maxColor, normalized)
    
    }
}
