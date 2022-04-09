AFRAME.registerComponent('cursor-listener',{
    schema: {
        selectedItemId: {type:'string', default: ''}
    },
    init: function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener('mouseenter', ()=>{
            const id = this.el.getAttribute('id')
            const posterId = ['captain-aero','outer-space','spiderman','superman']
            if(posterId.includes(id)){
                const posterContainer = document.querySelector('#poster-container')
                posterContainer.setAttribute('cursor-listener',{
                    selectedItemId:id
                })
                this.el.setAttribute('material',{
                    color:'#1b11a6'
                })
            }
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
                    })

               }
           } 
        })
    },
})