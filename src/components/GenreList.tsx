import useGenres from "../hooks/useGenres.ts";
import {HStack, List, ListItem, Image, Text, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = () => {
    const {data, error, isLoading} = useGenres();

    if (error) {
        return <Text>{error}</Text>;
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY={"5px"}>
                    <HStack>
                        <Image boxSize={"32px"} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize={"lg"}>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;