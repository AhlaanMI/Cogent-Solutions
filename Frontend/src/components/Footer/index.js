import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text_primary};
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const AwardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const AwardImage = styled.img`
  width: 100px;
  height: auto;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* Left Column */}
        <FooterColumn>
          <FooterTitle>Cogent Solutions™</FooterTitle>
          <FooterText>
            Through our conferences we transform your business challenges into
            opportunities. Our clients and customers are leading government
            entities and the Fortune 500 companies.
          </FooterText>
          <FooterTitle>Awards</FooterTitle>
          <AwardsContainer>
            <AwardImage
              src="https://cogentsolutions.ae/views/img/logos/BPW-2024_2.png"
              alt="Award 1"
            />
            <AwardImage
              src="https://cogentsolutions.ae/views/img/logos/bestwork-04.png"
              alt="Award 2"
            />
            <AwardImage
              src="https://cogentsolutions.ae/views/img/logos/bestwork-03.png"
              alt="Award 3"
            />
            <AwardImage
              src="https://cogentsolutions.ae/views/img/logos/bestwork-01.png"
              alt="Award 4"
            />
          </AwardsContainer>
        </FooterColumn>

        {/* Right Column */}
        <FooterColumn>
          <FooterTitle>Our Office</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <span>📍</span> Middle East & Africa HQ
              <br />
              Office No: 209, The Metropolis Tower, Business Bay, Dubai, UAE
            </ContactItem>
            <ContactItem>
              <span>📍</span> Asia Pacific HQ
              <br />
              7th Floor, Green Lanka Tower, Colombo, Sri Lanka
            </ContactItem>
            <ContactItem>
              <span>📍</span> Saudi Arabia HQ
              <br />
              Riyadh, Saudi Arabia
            </ContactItem>
            <ContactItem>
              <span>📞</span> +971 50 5718867
            </ContactItem>
            <ContactItem>
              <span>📧</span> partnerships@cogentsolutions.ae
            </ContactItem>
          </ContactInfo>
        </FooterColumn>
      </FooterWrapper>

      {/* Social Media Icons */}
      <SocialMediaIcons>
        <SocialMediaIcon href={Bio.linkedin} target="_blank">
          <LinkedInIcon />
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.facebook} target="_blank">
          <FacebookIcon />
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.insta} target="_blank">
          <InstagramIcon />
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.twitter} target="_blank">
          <TwitterIcon />
        </SocialMediaIcon>
      </SocialMediaIcons>

      {/* Copyright */}
      <Copyright>&copy; 2024 Ahlaan Imamdeen. All rights reserved.</Copyright>
    </FooterContainer>
  );
}

export default Footer;
