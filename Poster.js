

AFRAME.registerComponent('posters',{
    init: function(){
        this.postersContainer = this.el
        this.createPosters();
    },
    createPosters: function(){
        let previousXPosition = -60
        const posters=[
        {
            id:'captain-aero',
            title: 'Captain Aero',
            url:'./assets/posters/captain-aero-poster.jpg'
        },
        {
            id:'outer-space',
            title: 'Outer Space',
            url:'./assets/posters/outer-space-poster.jpg'
        },
        {
            id:'spiderman',
            title:'Spiderman',
            url:'./assets/posters/spiderman-poster.jpg'
        },
        {
            id:'superman',
            title:'Superman',
            url:'./assets/posters/superman-poster.jpg'
        }
      ]
    for(var item of posters){
        const posX = previousXPosition + 25
        const posY = 10
        const posZ = -40
        const position = {x:posX,y:posY,z:posZ}
        previousXPosition = posX
    
        const borderEL = this.createBorder(position,item.id)
        const poster = this.createP(item)

        borderEL.appendChild(poster)
        this.postersContainer.appendChild(borderEL)
    }

    },
    createBorder: function(position,id){
        const el = document.createElement('a-entity')
        el.setAttribute('id',id)
        el.setAttribute('visible',true)
        el.setAttribute('geometry',{
            primitive : 'plane',
            width:22,
            height:40
        })
        el.setAttribute('position',position)
        el.setAttribute('material',{
            color:'#fff'
        })
        return el
    },
    createP: function(item){
        const el = document.createElement('a-entity')
        el.setAttribute('visible', true)
        el.setAttribute('geometry',{
            primitive:'plane',
            width:20,
            height:28
        })
        el.setAttribute('position',{x:0,y:5,z:0.1})
        el.setAttribute('material',{
            src:item.url
        })
        return el
    } 




})