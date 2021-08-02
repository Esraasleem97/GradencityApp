import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content,} from "../Components/Styles";
import Input from "../Components/Input";
import {useDispatch, useSelector} from "react-redux";
import {projectsCreateHandler} from "../Redux/Actions/projectActions";
import {Alert} from "react-native";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";


const AddProject = ({navigation}) => {

    const {createProject} = useSelector(state => state);

    const {project, projectLoading, error} = createProject

    const dispatch = useDispatch()

    const [Project, setProject] = useState(null)


    const SubmitHandler = () => {
        if (!Project) {
            return Alert.alert('', 'الرجاء أضافة اسم للمشروع ')
        }

        dispatch(projectsCreateHandler({project: Project}))

    }


    useEffect(() => {

        if (project && project.success) {
            setProject(null)
        }
    }, [project])

    return (
        <Layout>
            <Header title='إضافة مشروع' navigation={navigation}/>
            <TransactionMessagesHandlerComponent data={project} error={error}/>
            <RefreshHandler>
                <Container>

                    <Content>


                        <Input
                            label='اسم المشروع'
                            icon='form'
                            placeholder='المشروع'
                            onChangeText={(val) => setProject(val)}

                        />
                        {
                            projectLoading
                                ?
                                <ButtonText>
                                    <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                                </ButtonText>
                                :
                                <Button onPress={SubmitHandler}>
                                    <ButtonText>حفظ</ButtonText>
                                </Button>
                        }
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}

export default AddProject;