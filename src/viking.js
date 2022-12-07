// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health,
        this.strength = strength
    }
attack(){
    return this.strength
}
receiveDamage(damage){  
    this.health -= damage
}
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
receiveDamage(damage){
    this.health -= damage
    if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }
}

battleCry(){
    return `Odin Owns You All!`
}
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
 receiveDamage(damage){
    this.health -= damage
    if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
}
}


// War
class War {
    constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
}

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]

        const saxDamaged = saxon.receiveDamage(viking.attack())


        if(saxDamaged.includes("died")){
            this.saxonArmy.splice(randomSaxon, 1)
        }
        return saxDamaged
    }

    saxonAttack(){
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]

        const vikDamaged = viking.receiveDamage(saxon.attack())


        if(vikDamaged.includes("died")){
            this.vikingArmy.splice(randomViking, 1)
        }
        return vikDamaged
    }

    showStatus(){
        if(this.vikingArmy.length ===0){
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.saxonArmy.length ===0){
            return `Vikings have won the war of the century!`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}






const war = new War()
const viking1 = new Viking("Ragnar", 280, 150)
const viking2 = new Viking("Bjorn", 300, 130)
const viking3 = new Viking("Ivar", 250, 125)

const saxon1 = new Saxon(200, 100)
const saxon2 = new Saxon(180, 100)
const saxon3 = new Saxon(190, 100)

war.addViking(viking1)
war.addViking(viking2)
war.addViking(viking3)

war.addSaxon(saxon1)
war.addSaxon(saxon2)
war.addSaxon(saxon3)