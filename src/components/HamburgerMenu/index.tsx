import Styled from "@/components/HamburgerMenu/styled";

const HamburgerMenu = () => {
  return (
      <Styled.Menu>
          <div className="menu-icon">
              <input className="menu-icon__checkbox" type="checkbox"/>
              <div>
                  <span></span>
                  <span></span>
              </div>
          </div>
      </Styled.Menu>

  )
}

export default HamburgerMenu;
