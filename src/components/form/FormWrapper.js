import styled from '@emotion/styled'

const ShadowWrapper = styled.div`box-shadow: 0 2px 4px rgba(0,0,0,.07), 0 4px 5px rgba(0,0,0,.06), 0 1px 10px rgba(0,0,0,.1);`

const FormWrapper = ({ children }) => (
  <ShadowWrapper className='p-10 text-black rounded-xl'>
    {children}
  </ShadowWrapper>
);

export default FormWrapper;