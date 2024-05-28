import useGenres, {Genre} from "../hooks/useGenres.ts";
import {HStack, List, ListItem, Image, Text, Spinner, Button} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
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
                        <Button onClick={() => onSelectGenre(genre)} fontSize={"lg"} variant={"link"}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;