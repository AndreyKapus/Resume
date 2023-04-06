import styled from "@emotion/styled";

const customStyles = {
  content: {
    position: 'relative',
    width: '600px',
    height: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
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
  z-index: 999;
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 50%;
`
