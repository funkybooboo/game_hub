import {Button, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms.ts";

const PlatformSelector = () => {

    const {data, error} = usePlatforms();

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown/>}>Platforms</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;