import React from 'react'


// <a className={props.menuToHighlight === "profile" ? "item active":"item"}id="profile" onClick={handleClick}>
//         <i className="user large icon" id="profile"/>
//       </a>

// <a className="item" id="photo" onClick={handleClick}>
// <i className="photo large icon" id="photo"/>
// </a>

// <a className="item" id="cocktail" onClick={handleClick}>
// <i className="cocktail large icon" id="cocktail"/>
// </a>

// <a className="item" id="pokemon" onClick={handleClick}> 
// <i className=" themeisle large icon" id="pokemon"/>
// </a>


const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  function buildMenuBar(id, className) {
    return (
      <a className={props.menuToHighlight === id ? "item active":"item"} id = {id} onClick={handleClick}>
        <i className={className + " large icon"} id={id} />
      </a>
    )
  }



 const handleClick = (event) => {
   console.log(event.target)
   props.onDisplayDetails(event.target.id)
 }

 

  return (
    <div className="ui four item menu">
      {buildMenuBar("profile", "user")}
      {buildMenuBar("photo", "photo")}
      {buildMenuBar("cocktail", "cocktail")}
      {buildMenuBar("pokemon", "themeisle")}
    </div>
  )

}

export default MenuBar
