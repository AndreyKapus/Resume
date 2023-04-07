import styled from "@emotion/styled";

const customStyles = {
  content: {
    position: 'relative',
    padding: '0px',
    width: '600px',
    height: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    overflow: 'visible',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: `${p => p.theme.colors.primaryBgColor}`,
    border: '3px solid rgba(0,255,255,0.7)',
    borderRadius: '5px',
    boxShadow: '0px 1px 2px 0px rgba(0,255,255,0.7), 1px 2px 4px 0px rgba(0,255,255,0.7), 2px 4px 8px 0px rgba(0,255,255,0.7), 2px 4px 16px 0px rgba(0,255,255,0.7)',
  },
};

export default customStyles

export const CloseMapBtn = styled.button`
  position: absolute;
  right: -30px;
  top: -25px;
  z-index: 999;
  border: none;
  background-color: transparent;
  &:hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.3);
    transition-duration: 300ms;
  };
  cursor: pointer;

`
