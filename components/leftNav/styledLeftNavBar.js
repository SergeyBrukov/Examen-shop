import styled from "styled-components";


export const Ul = styled.ul`
  margin-right: 30px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 10;
  @media (min-width: 768px) {
    .active {
        color: #FF4A32;
    }
  }

  @media (max-width: 992px) {
    margin-right: 0;
    flex-flow: column nowrap;
    background-color: #00000085;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    .active {
      background: #252831;
      border-left: 4px solid #FF4A32;
    }
  }
`;

export const SidebarLink = styled.a`
  padding: 0px 11px;
  color: #000000;
  cursor: pointer;
  transition: all 0.8s, text-shadow 0.8s;
  @media (max-width: 992px) {
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      background: #252831;
      border-left: 4px solid #f4a261;
      cursor: pointer;
    }
  }
  &:hover {
  color: #f4a261;
  text-shadow: 0 0 16px rgba(244,162,97,0.64);
}
`;
