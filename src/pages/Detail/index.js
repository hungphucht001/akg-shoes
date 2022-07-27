import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import styles from './Detail.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import * as apiProduct from '~/services/productApi';
import { Card, Col, notification, Radio, Row } from 'antd';
import Comment from '~/components/Comment';

const cx = classNames.bind(styles);

const tabListNoTitle = [
    {
        key: 'description',
        tab: 'Description',
    },
    {
        key: 'comment',
        tab: 'Comment',
    },
];
const contentListNoTitle = {
    description: <p>Enim duis ullamco labore duis reprehenderit enim sit. Sint occaecat eiusmod pariatur nostrud esse ullamco ea deserunt quis ex eu. Pariatur laborum sunt magna ut ut sint. Deserunt proident excepteur deserunt consectetur ad magna quis anim in incididunt sint enim consectetur eiusmod. Ipsum sint ut id duis excepteur eu occaecat tempor. Quis magna consectetur et nisi id exercitation esse do Lorem aliqua.</p>,
    comment: <>

        <Comment>
            <Comment>
                <Comment />
                <Comment />
            </Comment>
        </Comment>
        <Comment>
            <Comment>
                <Comment />
                <Comment />
            </Comment>
        </Comment>
    </>,
};

function Detail(props) {
    const [data, setData] = useState({});
    const [amount, setAmount] = useState(1);
    const [size, setSize] = useState(35);
    const [isEmpty, setIsEmpty] = useState(false);
    const [activeTabKey2, setActiveTabKey2] = useState('description');

    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };

    const location = useLocation();

    useEffect(() => {
        const slug = location.pathname.split('/')[2];
        const getData = async () => {
            const result = await apiProduct.product(slug);
            if (!result) setIsEmpty(true);
            else setData(result);
        };
        getData();
    }, [location]);

    const handleDecrease = () => {
        setAmount((prev) => {
            if (prev === 1) {
                console.log('xóa nha');
                return 1;
            }

            return prev - 1;
        });
    };

    const handleIncrease = () => {
        setAmount((prev) => {
            return prev + 1;
        });
    };

    const handleChangeSize = (e) => {
        setSize(e.target.value);
    };

    const openNotification = () => {
        notification.success({
            description: 'Thêm vào giỏ hàng thành công',
        });
    };

    const handleAddToCart = () => {
        const newData = {
            name: data.name,
            slug: data.slug,
            avatar: data.avatar,
            amount: amount,
            size: size,
            price: data.price,
        };
        const cartLocal = localStorage.getItem('carts');
        if (cartLocal) {
            let cartLocalJson = JSON.parse(cartLocal);

            cartLocalJson.forEach((element) => {
                if (
                    element.slug === newData.slug &&
                    element.size === newData.size
                ) {
                    element.amount = element.amount + newData.amount;
                    return;
                }
            });

            let isExist = cartLocalJson.some(value => value.slug === newData.slug && value.size === newData.size);
            !isExist
                ? localStorage.setItem(
                    'carts',
                    JSON.stringify([...cartLocalJson, newData]),
                )
                : localStorage.setItem('carts', JSON.stringify(cartLocalJson));
        } else {
            localStorage.setItem('carts', JSON.stringify([newData]));
        }
        openNotification();
    };

    return (
        <div className={cx('detail')}>
            <div className={cx('container')}>
                {data.price && (
                    <Row gutter={[20, 20]}>
                        <Col md={12}>
                            <img src={data.avatar} alt="" />
                        </Col>
                        <Col md={12}>
                            <div className={cx('wrap-content')}>
                                <div className={cx('name')}>
                                    <h2>{data.name}</h2>
                                </div>
                                <div className={cx('price')}>
                                    <span className={cx('sale')}>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            displayType={'text'}
                                            value={data.price.replace(
                                                '.00',
                                                '',
                                            )}
                                        />
                                        đ
                                    </span>
                                </div>
                                <Radio.Group
                                    onChange={handleChangeSize}
                                    style={{
                                        marginTop: '30px',
                                        marginBottom: '20px',
                                    }}
                                    defaultValue="a"
                                    buttonStyle="solid"
                                >
                                    <Radio.Button checked={true} value="a">
                                        35
                                    </Radio.Button>
                                    <Radio.Button value="b">36</Radio.Button>
                                    <Radio.Button value="c">37</Radio.Button>
                                    <Radio.Button value="dư">38</Radio.Button>
                                    <Radio.Button value="dưdưq">
                                        39
                                    </Radio.Button>
                                    <Radio.Button value="ddqw">40</Radio.Button>
                                    <Radio.Button value="ddưqw">
                                        41
                                    </Radio.Button>
                                    <Radio.Button value="ddưq">42</Radio.Button>
                                    <Radio.Button value="dưưdqwq">
                                        43
                                    </Radio.Button>
                                </Radio.Group>
                                <div className={cx('amount')}>
                                    <span
                                        onClick={handleDecrease}
                                        className={cx('btn decrease')}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </span>
                                    <span className={cx('amount-title')}>
                                        {amount}
                                    </span>
                                    <span
                                        onClick={handleIncrease}
                                        className={cx('btn increase')}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </span>
                                </div>
                                <div className=''>
                                    <button
                                        onClick={handleAddToCart}
                                        className={cx('btn btn-add')}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col className='w-100' md={24}>
                            <Card
                                style={{
                                    width: '100%',
                                }}
                                tabList={tabListNoTitle}
                                activeTabKey={activeTabKey2}
                                onTabChange={(key) => {
                                    onTab2Change(key);
                                }}
                            >
                                {contentListNoTitle[activeTabKey2]}
                            </Card>
                        </Col>
                    </Row>
                )}
                {isEmpty && <p>Sản phẩm không tồn tại</p>}
            </div>
        </div >
    );
}


export default Detail;
