import useGenres, {Genre} from "../hooks/useGenres.ts";
import {HStack, List, ListItem, Image, Text, Spinner, Button} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
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
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize={"lg"} variant={"link"}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;