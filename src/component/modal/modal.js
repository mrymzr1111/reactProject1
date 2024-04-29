const Modal=({show,hide,children,title})=>{
    return(
  <div className="modal-content "  style={{display:show?"block":"none"}}>
    <div className="modal-header">
      <span className="close " onClick={()=>{hide();}}> <b>&times;</b></span>
      <h2>{title}</h2>
    </div>
    <div className="modal-body">
    
     <div>
    {children}
       
      </div>
      
    </div>
    {/* <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div> */}
  </div>
    )
  }
  export default Modal;



