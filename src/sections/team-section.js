/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Container, Grid, Box, Image, Heading, Text, Link } from 'theme-ui';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebookF, FaDiscord } from 'react-icons/fa';

const data = [
  {
    id: 1,
    imgSrc: 'https://telegra.ph/file/13d725f8c505642634282.jpg',
    altText: 'Mohammad Abbass',
    title: 'Mohammad Abbass',
    designation: 'Full Stack Developer',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/Mohammad-y-abbass',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/mohammad-abbass',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: 'https://telegra.ph/file/dda6c7c422f87d8c04f87.jpg',
    altText: 'Phillip Venus',
    title: 'Phillip Venus',
    designation: 'Mobile Developer',
    socialProfile: [
      {
        id: 1,
        name: 'twitter',
        path: 'https://twitter.com/GPrincePhillip',
        icon: <FaTwitter />,
      },
      {
        id: 2,
        name: 'github',
        path: 'https://github.com/GrandPrince',
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: 'https://telegra.ph/file/48713eda71913759862c0.jpg',
    altText: 'Borna Krpan',
    title: 'Borna Krpan',
    designation: 'Software Developer',
    socialProfile: [
      {
        id: 1,
        name: 'discord',
        path: 'https://discord.com/users/429328860648308766',
        icon: <FaDiscord />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/login',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'facebook',
        path: 'https://www.facebook.com/borna.krpan77',
        icon: <FaFacebookF />,
      },
      {
        id: 4,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/borna-krpan',
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: 'https://telegra.ph/file/006201e0df93a801291ed.jpg',
    altText: 'Malik Mehtab',
    title: 'Malik Mehtab',
    designation: 'Bot Developer',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/themalik-g',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/where_is_my_name_n_dp',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <Heading as="h1" sx={{ textAlign: 'center', mb: 4 }}>Our Team</Heading>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.imageContainer}>
                <Image src={item.imgSrc} alt={item.altText} sx={styles.profileImage} />
              </Box>
              <Box sx={styles.info}>
                <Heading as="h3">{item.title}</Heading>
                <Text as="span">{item.designation}</Text>
                <Box sx={styles.socialIcons}>
                  {item.socialProfile.map((social) => (
                    <Link key={social.id} href={social.path} sx={styles.socialIcon}>
                      {social.icon}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gap: '30px',
  },
  card: {
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    mb: 3,
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '5px solid #f09433', // Instagram-like circle effect
    padding: '3px',
    background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
  },
  info: {
    h3: {
      fontSize: '18px',
      fontWeight: 'bold',
      mt: 2,
    },
    span: {
      fontSize: '14px',
      color: '#666',
    },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    mt: 3,
    a: {
      fontSize: '20px',
      color: '#333',
      mx: 2,
    },
  },
};
