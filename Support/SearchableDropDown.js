/**
 * override  the base / parent SearchableDropDown to do a nested scroll between flat lists
 */

import React from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler'


import SearchableDropDown from '../node_modules/react-native-searchable-dropdown/index.js';
import {TextInsideSelect} from "../Components/Styles";

const defaultItemValue = {
    name: '', id: 0
};
const fontSize = 14
const textAlign = 'left'

export default class SearchableDropDownScroll extends SearchableDropDown {

    constructor(props) {
        super(props);
        this.renderTextInput = this.renderTextInput.bind(this);
        this.renderFlatList = this.renderFlatList.bind(this);
        this.searchedItems = this.searchedItems.bind(this);
        this.renderItems = this.renderItems.bind(this);

        this.state = {
            item: {},
            listItems: [],
            focus: false,
            isEnItem: false,
            width: 50
        };
    }


    renderFlatList = () => {
        if (this.state.focus) {
            const flatListPorps = {...this.props.listProps};
            const oldSupport = [
                {key: 'keyboardShouldPersistTaps', val: 'always'},
                {key: 'nestedScrollEnabled', val: true},
                {key: 'style', val: {...this.props.itemsContainerStyle}},
                {key: 'data', val: this.state.listItems},
                {key: 'keyExtractor', val: (item, index) => index.toString()},
                {key: 'renderItem', val: ({item, index}) => this.renderItems(item, index)}
            ];
            oldSupport.forEach((kv) => {
                if (!Object.keys(flatListPorps).includes(kv.key)) {
                    flatListPorps[kv.key] = kv.val;
                } else {
                    if (kv.key === 'style') {
                        flatListPorps['style'] = kv.val;
                    }
                }
            });
            return (
                <FlatList
                    {...flatListPorps}
                />
            );
        }
    };


    componentDidMount = () => {
        const listItems = this.props.items;
        const defaultIndex = this.props.defaultIndex;
        if (defaultIndex && listItems.length > defaultIndex) {
            this.setState({
                listItems,
                item: listItems[defaultIndex]
            });
        } else {
            this.setState({listItems});
        }

    };

    searchedItems = searchedText => {
        this.setState({isEnItem: false})
        let setSort = this.props.setSort;
        if (!setSort && typeof setSort !== 'function') {
            setSort = (item, searchedText) => {

                if (item.latin_name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1) {
                    this.setState({isEnItem: true})
                    return item.latin_name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1
                } else if (item.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1) {
                    return item.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
                } else {
                    return item.code.indexOf(searchedText.toLowerCase()) > -1
                }

            };
        }
        var ac = this.props.items.filter((item) => {
            return setSort(item, searchedText);
        });
        let item = {
            id: -1,
            name: searchedText
        };
        this.setState({listItems: ac, item: item});
        const onTextChange = this.props.onTextChange ||
            this.props.textInputProps.onTextChange ||
            this.props.onChangeText ||
            this.props.textInputProps.onChangeText;
        if (onTextChange && typeof onTextChange === 'function') {
            setTimeout(() => {
                onTextChange(searchedText);
            }, 0);
        }

    };

    renderItems = (item, index) => {
        let itemPresentation = item.name;

        // only products contain these attributes
        if (item.name && item.size && item.height && item.diameter) {

            let nameItemLanguage = this.state.isEnItem ? item.latin_name : item.name

            itemPresentation = <View style={{ width: '100%',flexDirection:'row'}}>
                <TextInsideSelect>
                    {'ق:' + item.size.replace(' ', '')}
                </TextInsideSelect>


                <TextInsideSelect>
                    {'ط:' + item.height.replace(' ', '')}
                </TextInsideSelect>

                <TextInsideSelect>
                    {'م:' + item.diameter.replace(' ', '')}
                </TextInsideSelect>

                <TextInsideSelect>
                    {'ك:' + item.qty.replace(' ', '')}
                </TextInsideSelect>

                <TextInsideSelect>
                    {nameItemLanguage}
                </TextInsideSelect>


                <TextInsideSelect >
                    {item.code.replace(' ', '')}
                </TextInsideSelect>

            </View>

        }

        if (this.props.multi && this.props.selectedItems && this.props.selectedItems.length > 0) {
            return (
                this.props.selectedItems.find(sitem => sitem.id === item.id)
                    ?
                    <TouchableOpacity style={{...this.props.itemStyle, flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 0.9, flexDirection: 'row', alignItems: 'flex-start'}}>
                            <Text style={{fontSize: fontSize, textAlign: textAlign}}>{itemPresentation}</Text>
                        </View>
                        <View style={{flex: 0.1, flexDirection: 'row', alignItems: 'flex-end'}}>
                            <TouchableOpacity onPress={() => setTimeout(() => {
                                this.props.onRemoveItem(item, index)
                            }, 0)} style={{
                                backgroundColor: '#f16d6b',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 25,
                                height: 25,
                                borderRadius: 100,
                                marginLeft: 10
                            }}>
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({item: item});
                            try {
                                this.props.onItemSelect(item);
                            } catch (e) {
                                console.log(e)
                            }
                        }}
                        style={{...this.props.itemStyle, flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
                            <Text style={{fontSize: fontSize, textAlign: textAlign}}>{itemPresentation}</Text>
                        </View>
                    </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                    style={{...this.props.itemStyle}}
                    onPress={() => {
                        this.setState({item: item, focus: false});
                        Keyboard.dismiss();
                        setTimeout(() => {
                            this.props.onItemSelect(item);
                            if (this.props.resetValue) {
                                this.setState({focus: true, item: defaultItemValue});
                                this.input.focus();
                            }
                        }, 0);
                    }}
                >
                    {
                        this.props.selectedItems && this.props.selectedItems.length > 0 && this.props.selectedItems.find(x => x.id === item.id)
                            ?
                            <Text style={{
                                ...this.props.itemTextStyle,
                                fontSize: fontSize,
                                textAlign: textAlign
                            }}>{itemPresentation}</Text>
                            :
                            <Text style={{
                                ...this.props.itemTextStyle,
                                fontSize: fontSize,
                                textAlign: textAlign
                            }}>{itemPresentation}</Text>
                    }
                </TouchableOpacity>
            );
        }
    };

    renderListType = () => {
        return this.renderFlatList();
    };

    renderTextInput = () => {
        const textInputProps = {...this.props.textInputProps};
        const oldSupport = [
            {key: 'ref', val: e => (this.input = e)},
            {
                key: 'onTextChange', val: (text) => {
                    this.searchedItems(text)
                }
            },
            {key: 'underlineColorAndroid', val: this.props.underlineColorAndroid},
            {
                key: 'onFocus',
                val: () => {
                    this.props.onFocus && this.props.onFocus()
                    this.setState({
                        focus: true,
                        item: defaultItemValue,
                        listItems: this.props.items
                    });
                }
            },
            {
                key: 'onBlur',
                val: () => {
                    this.props.onBlur && this.props.onBlur(this);
                    this.setState({focus: false, item: this.props.selectedItems});
                }
            },
            {
                key: 'value',
                val: this.state.item ? this.state.item.name : ''
            },
            {
                key: 'style',
                val: {...this.props.textInputStyle}
            },
            {
                key: 'placeholderTextColor',
                val: this.props.placeholderTextColor
            },
            {
                key: 'placeholder',
                val: this.props.placeholder
            }
        ];
        oldSupport.forEach((kv) => {
            if (!Object.keys(textInputProps).includes(kv.key)) {
                if (kv.key === 'onTextChange' || kv.key === 'onChangeText') {
                    textInputProps['onChangeText'] = kv.val;
                } else {
                    textInputProps[kv.key] = kv.val;
                }
            } else {
                if (kv.key === 'onTextChange' || kv.key === 'onChangeText') {
                    textInputProps['onChangeText'] = kv.val;
                }
            }
        });
        return (
            <TextInput
                {...textInputProps}
                onBlur={(e) => {
                    if (this.props.onBlur) {
                        this.props.onBlur(e);
                    }
                    if (this.props.textInputProps && this.props.textInputProps.onBlur) {
                        this.props.textInputProps.onBlur(e);
                    }
                    this.setState({focus: false, item: this.props.selectedItems});
                }
                }
            />
        )
    }

    render = () => {
        return (
            <View
                keyboardShouldPersist="always"
                style={{...this.props.containerStyle}}
            >
                {this.renderSelectedItems()}
                {this.renderTextInput()}
                {this.renderListType()}
            </View>
        );
    };

    renderSelectedItems() {
        let items = this.props.selectedItems || [];
        if (items !== undefined && items.length > 0 && this.props.chip && this.props.multi) {
            return <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 10, marginTop: 5}}>
                {items.map((item, index) => {
                    return (
                        <View key={index} style={{
                            width: (item.name.length * 8) + 60,
                            justifyContent: 'center',
                            flex: 0,
                            backgroundColor: '#eee',
                            flexDirection: 'row',
                            alignItems: 'center',
                            margin: 5,
                            padding: 8,
                            borderRadius: 15,
                        }}>
                            <Text style={{color: '#555'}}>{item.name}</Text>
                            <TouchableOpacity onPress={() => setTimeout(() => {
                                this.props.onRemoveItem(item, index)
                            }, 0)} style={{
                                backgroundColor: '#f16d6b',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 25,
                                height: 25,
                                borderRadius: 100,
                                marginLeft: 10
                            }}>
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
                }
            </View>
        }
    }
}