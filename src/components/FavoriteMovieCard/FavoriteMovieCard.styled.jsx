import styled from '@emotion/styled';

export const MovieCardList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const MovieCardItem = styled.li``;

export const MovieCard = styled.div`
  position: relative;
  display: block;
  width: 95%;
  height: auto;
  margin: 50px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
  }

  @media screen and (min-width: 768px) {
    width: 550px;
    height: 300px;
     margin:0px;
  }
}
`;

export const InfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;

  @media (min-width: 768px) {
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }
  @media (max-width: 768px) {
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
`;

export const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 85px;
  }
`;

export const Image = styled.img`
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
`;

export const TitleMovie = styled.h1`
  color: #fff;
  font-weight: 400;
`;

export const ReleaseDate = styled.h4`
  color: #9ac7fa;
  font-weight: 400;
`;

export const Minutes = styled.span`
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.13);
`;

export const Type = styled.p`
  display: inline-block;
  color: #cee4fd;
  margin-left: 10px;
`;

export const MovieDesc = styled.div`
  padding: 25px;
  height: 50%;

  @media (min-width: 768px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WrapperButton = styled.div``;

export const ListButton = styled.ul`
  display: flex;
`;

export const ItemButton = styled.li`
 &:not(:last-child) {
      margin-right: 13px;

`;

export const Text = styled.p`
  color: #cfd6e1;
`;

export const MovieSocial = styled.div`
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
`;

export const MovieSocialList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieSocialItem = styled.li`
 display: inline-block;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
  &:hover {
    transition: color 0.3s;
    color: rgba(255, 255, 255, 0.8);
  }
}
`;

export const MovieSocialIcon = styled.i`
  font-size: 19px;
  cursor: pointer;
`;

export const BlurBack = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;

  @media (min-width: 768px) {
    width: 85%;
    background-position: -100% 10%;
  }
  @media (max-width: 768px) {
    width: 100%;
    background-position: 50% 50%;
  }
`;
