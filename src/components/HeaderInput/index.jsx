import { Container, Input, Content } from "../HeaderInput/styles";
import { BiSearch } from 'react-icons/bi'
import { useUserInfo } from "../../providers/userInfo";
import { usePhotographerList } from "../../providers/PhotographerList";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SugestionsSearchBar from "../SugestionsSearchBar/index";

const HeaderInput = ({ placeholder }) => {
  const { userInfo } = useUserInfo()
  const { photographerList } = usePhotographerList()
  const [filteredList, setFilteredList] = useState([])
  const { handleSubmit } = useForm()

  const handleSearch = (e) => {
    e.preventDefault()

    const { value } = e.target
    
    const searchFor = 
      userInfo.type === "photographer" ?
        console.log("oi")
      :
        photographerList.filter((photographer) => (
          photographer.name.toLowerCase().includes(value.toLowerCase())||
          photographer.tags.toLowerCase().includes(value.toLowerCase())
        ))
    setFilteredList(searchFor)
    console.log(filteredList)
  }

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleSearch)}>
        <Input placeholder={placeholder} onChange={handleSearch} />
        <button type="submit">
          <BiSearch/>
        </button>
      </Content>
      <SugestionsSearchBar profilesList={filteredList}/>
    </Container>
  );
};

export default HeaderInput;
