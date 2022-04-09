AFRAME.registerComponent('cursor-listener',{
    schema: {
        selectedItemId: {type:'string', default: ''}
    },
    init: function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handleComicsListState: function(){
        const id = this.el.getAttribute('id')
        const comicsId = ['captain-aero','outer-space','spiderman','superman']
        if(comicsId.includes(id)){
            const comicContainer = document.querySelector('#poster-container')
            comicContainer.setAttribute('cursor-listener', {
                selectedItemId:id,
            })
            this.el.setAttribute('material',{
                color:'#1b11a6',
                opacity:1
            })
        }
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener('mouseenter', ()=>{
            this.handleComicsListState()
        })
    },
    handleMouseLeaveEvents: function(){
        this.el.addEventListener('mouseleave', ()=>{
           const {selectedItemId} = this.data
           if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute('id')
                if(id===selectedItemId){
                    el.setAttribute('material',{
                    color: '#fff',
                    opacity:1
                    })

               }
           } 
        })
    },
})