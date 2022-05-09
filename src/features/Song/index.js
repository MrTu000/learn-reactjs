import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const album = [
        {
            id: '1',
            name: 'Nhac Hoa Tinh Hanh',
            thumbnailUrl: 'https://thuthuatnhanh.com/wp-content/uploads/2019/11/anh-gai-xinh-kute-de-thuong-cap-3.jpg'
        },
        {
            id: '2',
            name: 'Rap Viet Nghe La Nghien',
            thumbnailUrl: 'https://img2.thuthuatphanmem.vn/uploads/2018/12/25/anh-gai-xinh-nghe-thuat_012905469.jpg'
        },
        {
            id: '3',
            name: 'Trao Luu Nhac Hot',
            thumbnailUrl: 'https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-hot-girl-nhat-ban-820x513.jpg  '
        },
    ]

    return (
        <div>
            <h1>Có thể bạn sẽ thích đấy</h1>
            <AlbumList albumList={album} />
        </div>
    );
}

export default AlbumFeature;