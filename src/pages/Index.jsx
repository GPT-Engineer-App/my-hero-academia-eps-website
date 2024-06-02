import { Container, Text, VStack, Heading, Box, Image, IconButton, Link } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const episodes = [
  {
    title: "Episode 1: Izuku Midoriya: Origin",
    description: "Izuku Midoriya, a regular middle school student, dreams of becoming a hero despite being born without a Quirk.",
    image: "https://images.unsplash.com/photo-1546953304-5d96f43c2e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxteSUyMGhlcm8lMjBhY2FkZW1pYSUyMGVwaXNvZGUlMjAxfGVufDB8fHx8MTcxNzM2NzQ3NHww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://www.crunchyroll.com/episode-1",
  },
  {
    title: "Episode 2: What It Takes to Be a Hero",
    description: "All Might tells Izuku that he can become a hero, and gives him a piece of his hair to eat to inherit his Quirk.",
    image: "https://images.unsplash.com/photo-1546953304-5d96f43c2e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxteSUyMGhlcm8lMjBhY2FkZW1pYSUyMGVwaXNvZGUlMjAyfGVufDB8fHx8MTcxNzM2NzQ3NHww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://www.crunchyroll.com/episode-2",
  },
  // Add more episodes as needed
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>
          My Hero Academia Episodes
        </Heading>
        {episodes.map((episode, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
            <Image src={episode.image} alt={episode.title} />
            <Box p={6}>
              <Heading as="h2" size="md" mb={2}>
                {episode.title}
              </Heading>
              <Text mb={4}>{episode.description}</Text>
              <Link href={episode.link} isExternal>
                <IconButton aria-label="Watch Episode" icon={<FaPlay />} size="lg" />
              </Link>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
