import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";

const SortSelector = () => {

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown/>}> Order by: Relevance </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default SortSelector;