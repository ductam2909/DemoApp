'use client';

import React from 'react';
import Image from 'next/image';
import { Layout, Row, Col } from 'antd';

const { Header, Content } = Layout;

interface Article {
  title: string;
  source: string;
  time: string;
  image: string;
}

const articles: Article[] = [
  {
    title: 'Thủ tướng: Chuyển đổi số là động lực phát triển',
    source: 'VnExpress',
    time: '1 giờ trước',
    image: 'https://placekitten.com/200/120',
  },
  {
    title: 'Giá vàng tăng mạnh trong phiên sáng',
    source: 'Tuổi Trẻ',
    time: '2 giờ trước',
    image: 'https://placekitten.com/201/120',
  },
  {
    title: 'U23 Việt Nam thắng đậm trong trận giao hữu',
    source: 'Thanh Niên',
    time: '3 giờ trước',
    image: 'https://placekitten.com/202/120',
  },
  {
    title: 'Công nghệ AI ngày càng phổ biến trong giáo dục',
    source: 'VNReview',
    time: '4 giờ trước',
    image: 'https://placekitten.com/203/120',
  },
  {
    title: 'Khởi nghiệp xanh thu hút nhà đầu tư',
    source: 'Dân Trí',
    time: '5 giờ trước',
    image: 'https://placekitten.com/204/120',
  },
  {
    title: 'Ẩm thực đường phố Việt Nam gây ấn tượng',
    source: 'Zing',
    time: '6 giờ trước',
    image: 'https://placekitten.com/205/120',
  },
];

const highlights: Article[] = [
  {
    title: 'Kinh tế Việt Nam phục hồi sau đại dịch',
    source: 'VnEconomy',
    time: '1 giờ trước',
    image: 'https://placekitten.com/100/60',
  },
  {
    title: 'Lễ hội pháo hoa quốc tế sắp diễn ra',
    source: 'Tuổi Trẻ',
    time: '2 giờ trước',
    image: 'https://placekitten.com/101/60',
  },
  {
    title: 'Xe điện đang trở thành xu hướng mới',
    source: 'AutoPro',
    time: '3 giờ trước',
    image: 'https://placekitten.com/102/60',
  },
  {
    title: 'Du lịch hè: Những điểm đến hấp dẫn',
    source: 'TravelMag',
    time: '4 giờ trước',
    image: 'https://placekitten.com/103/60',
  },
  {
    title: 'Các trường đại học mở ngành học mới',
    source: 'VTV',
    time: '5 giờ trước',
    image: 'https://placekitten.com/104/60',
  },
];

const BaoMoi: React.FC = () => (
  <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
    <Header
      style={{
        background: '#1e6bb8',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
      }}
    >
      <h1 style={{ color: '#fff', margin: 0, fontSize: 24 }}>BÁO MỚI</h1>
      <nav style={{ marginLeft: 24, display: 'flex', gap: 16 }}>
        <a style={{ color: '#fff' }} href="#">Tin mới</a>
        <a style={{ color: '#fff' }} href="#">Thế giới</a>
        <a style={{ color: '#fff' }} href="#">Kinh doanh</a>
        <a style={{ color: '#fff' }} href="#">Giải trí</a>
      </nav>
    </Header>
    <Content style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
      <Row gutter={24}>
        <Col xs={24} md={16}>
          {articles.map((article) => (
            <div
              key={article.title}
              style={{
                display: 'flex',
                marginBottom: 24,
                background: '#fff',
                padding: 12,
                borderRadius: 4,
              }}
            >
              <Image
                alt={article.title}
                src={article.image}
                width={200}
                height={120}
                style={{ objectFit: 'cover', borderRadius: 4 }}
              />
              <div style={{ marginLeft: 16 }}>
                <h3 style={{ margin: 0, color: '#1e6bb8' }}>{article.title}</h3>
                <p style={{ margin: '4px 0', color: '#666' }}>
                  {article.source} - {article.time}
                </p>
              </div>
            </div>
          ))}
        </Col>
        <Col xs={24} md={8}>
          <h2 style={{ marginTop: 0 }}>Tin nổi bật</h2>
          {highlights.map((article) => (
            <div key={article.title} style={{ display: 'flex', marginBottom: 16 }}>
              <Image
                alt={article.title}
                src={article.image}
                width={80}
                height={50}
                style={{ objectFit: 'cover', borderRadius: 4 }}
              />
              <div style={{ marginLeft: 8 }}>
                <p style={{ margin: 0 }}>{article.title}</p>
                <p style={{ margin: '4px 0', color: '#666', fontSize: 12 }}>
                  {article.source} - {article.time}
                </p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default BaoMoi;

