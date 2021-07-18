import React, {useState} from "react";
import {
    Layout,
    CheckBox, Text
} from "@ui-kitten/components";
import Header from "../Components/Header";
import SharedScreens from "../Components/SharedScreen";
import SelectDropDown from "../Components/SelectDropDown";
import {View} from "react-native";
import Input from "../Components/Input";


const Achievement = ({navigation, route}) => {

    const [isChooseNewProject, setIsChooseNewProject] = useState(false);

    const [isChooseNewProduct, setIsChooseNewProduct] = useState(false);

    const chooseProjectHandler = () => {
        console.log('isChooseNewProject', isChooseNewProject)
        setIsChooseNewProject(!isChooseNewProject)

        console.log('isChooseNewProject', isChooseNewProject)

    }

    const chooseProductHandler = () => {
        console.log('isChooseNewProduct', isChooseNewProduct)

        setIsChooseNewProduct(!isChooseNewProduct)
        console.log('isChooseNewProduct', isChooseNewProduct)
    }


    const {params: {data: {projects, products}}} = route

    return (
        <Layout>
            <Header title='الإنجازات' navigation={navigation}/>

            <SharedScreens onTop={true}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                    <CheckBox
                        status='warning'
                        checked={isChooseNewProject}
                        onChange={chooseProjectHandler}>
                        {evaProps => <Text {...evaProps} style={{fontSize: 15, margin: 15}}>تسجيل مشروع جديد</Text>}

                    </CheckBox>

                    <CheckBox
                        status='warning'
                        checked={isChooseNewProduct}
                        onChange={chooseProductHandler}>
                        {evaProps => <Text {...evaProps} style={{fontSize: 15, margin: 15}}>تسجيل بند جديد</Text>}

                    </CheckBox>
                </View>
                {
                    isChooseNewProject && !isChooseNewProduct
                        ?
                        <View>

                            <Input
                                label='أضافة مشروع جديد'
                                icon='form'
                                placeholder='ادخل أسم المشروع الجديد هنا'
                            />
                            <SelectDropDown items={projects}/>
                        </View>
                        : isChooseNewProduct && !isChooseNewProject
                        ?
                        <View>
                            <SelectDropDown items={projects} title='مشاريع'/>
                            <Input
                                label='أضافة بند جديد'
                                icon='form'
                                placeholder='ادخل أسم البند الجديد هنا'
                            />
                        </View>

                        : isChooseNewProduct && isChooseNewProject
                            ? <View>
                                <Input
                                    label='أضافة مشروع جديد'
                                    icon='form'
                                    placeholder='ادخل أسم المشروع الجديد هنا'
                                />
                                <Input
                                    label='أضافة بند جديد'
                                    icon='form'
                                    placeholder='ادخل أسم البند الجديد هنا'
                                />
                            </View>

                            : <View>
                                <SelectDropDown items={projects} title='مشاريع'/>
                                <SelectDropDown items={products}/>
                            </View>

                }
            </SharedScreens>

        </Layout>
    )
}

export default Achievement;