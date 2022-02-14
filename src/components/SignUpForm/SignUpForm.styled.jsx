import styled from '@emotion/styled';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
  color: white;
`;

export const WrapperForm = styled.div`
  width: 300px;
  padding: 40px 17px;
  background-color: rgb(0, 0, 0, 0.65);
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 436px;
    padding: 50px 85px;
  }
`;

export const StyledInput = styled(Field)`
  position: relative;
  width: 253px;
  height: 52px;
  background-color: #343434;
  border-radius: 5px;
  border: none;
  padding: 17px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    width: 265px;
  }
  ::placeholder {
    font-family: ${props => props.theme.fontFamily};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
`;

export const AdditionallyInfo = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  font-family: ${props => props.theme.fontFamily};
  color: #52555f;
  text-align: center;
  margin: 0px 0px 24px 0px;
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16;
  }
`;

export const InputName = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: white;
  margin: 0px 0px 12px 0px;
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -3px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;
`;

export const BoxButton = styled.div`
  display: flex;
`;

export const Button = styled.button`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  width: 125px;
  height: 44px;
  border-radius: 5px;
  text-decoration: none;
   background-color:red;
  border: none;
  bac
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

//
export const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 15px 38px;
  text-decoration: none;
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 44px;
  background-color: red;
  border-radius: 5px;
  margin-right: 15px;
`;

export const WrapperInput = styled.div`
  position: relative;
`;
