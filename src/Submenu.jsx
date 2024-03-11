import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './context'
import { useRef } from 'react'

const Submenu = () => {
  const {pageId,setPageId} = useGlobalContext();
  const currentpage = sublinks.find((item) => item.pageId === pageId);
  const subMenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = subMenuContainer.current;
    // console.log(event.clientX,event.clientY);
    const {left, right, bottom} = submenu.getBoundingClientRect();
    // console.log(submenu.getBoundingClientRect());
    const {clientX,clientY} = event;

    if (clientX < left-1 || clientX > right-1 || clientY > bottom-1){
       setPageId(null);
    }
    
  }

  return (
    <div className={currentpage?'submenu show-submenu':'submenu'} onMouseLeave={handleMouseLeave} ref={subMenuContainer}>
      <h5>{currentpage?.page}</h5>
      <div className="submenu-links" style={{gridTemplateColumns:currentpage?.links?.length > 3 ?'1fr 1fr' : '1fr'}}>
        {currentpage?.links?.map((link) => {
          const {id,label,icon,url} = link;
          return(
            <a key={id} href={url}>{icon}{label}</a>
          );
        })}
      </div>
    </div>
  )
}

export default Submenu
Submenu