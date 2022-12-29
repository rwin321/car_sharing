import styled from 'styled-components'
import tw from 'twin.macro'
import MclarenCarImg from 'assets/images/dodge-big.png'
import BlobImg from 'assets/images/blob.svg'
import { SCREENS } from 'app/components/responsive'
import Button from 'app/components/button'

const TopSectionContainer = styled.div`
  min-height: 300px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:px-12
  `}
`

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}
`

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `}
`

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    max-h-12
    text-gray-800
  `}
`

const BlobContainer = styled.div`
  position: absolute;
  width: 20em;
  height: 10em;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 55em;
    max-height: 25em;
    right: -15em;
    top: -19em;
    transform: rotate(-20deg);
  }

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
`

const StandaloneCar = styled.div`
  position: absolute;
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;

  @media (min-width: ${SCREENS.sm}) {
    height: 11em;
    right: -5em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 18em;
    right: -9em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 24em;
    right: -15em;
    top: -8em;
  }

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
`

const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-wrap
  `}
`

export const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Find The Best Quality Car Rent With Us</Slogan>
        <Description>
          You have an opportunity to choose any car from budget ones to the newest modern sport cars
          for the best price on the market!
        </Description>
        <ButtonContainer>
          <Button text="Book a ride!" theme="outlined" />
          <Button text="Sell Your Car" theme="filled" />
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} />
        </BlobContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  )
}
