
import React from 'react';
import { Layout } from 'antd';
import HeaderContent from './../../components/layouts/HeaderContent'
import FooterContent from './../../components/layouts/FooterContent'

import sty from './index.less'


const { Header, Footer, Content } = Layout;



class CreateLayout extends React.Component {

    render() {

        return (
            <Layout className={sty.LayoutSty}>
                {/* <Header className={sty.HeaderSty}><HeaderContent /></Header> */}
                <Content>
                    {this.props.children}
                </Content>
                <Footer><FooterContent /></Footer>
            </Layout>
        )




    }

}

export default CreateLayout;
