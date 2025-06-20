import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Row, Col, Typography, Divider } from "antd";

const { Title, Text, Paragraph } = Typography;

const NewsDetailsPage = ({ news }) => {
  return (
    <div style={{ padding: "40px" }}>
      <Row gutter={[24, 24]} align="middle">
        {/* Left Column: Image */}
        <Col xs={24} md={12}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src={news.image_url}
              alt={news.title}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
          </div>
        </Col>

        {/* Right Column: Textual Details */}
        <Col xs={24} md={12}>
          <Title
            style={{
              borderBottom: "6px solid black",
              borderRadius: "5px",
              paddingBottom: "5px",
              fontWeight:'bold'
            }}
            level={2}
          >
            {news.title}
          </Title>
          <Paragraph>{news.description}</Paragraph>

          <Divider />

          <div style={{ fontSize: "14px", color: "#666", lineHeight: "1.8" , fontWeight:"bold" }}>
            <Text strong>Author:</Text> {news.author} <br />
            <Text strong>Published:</Text> {news.release_date} <br />
            <Text strong>Category:</Text> {news.category} <br />
            <Text strong>Comments:</Text> {news.comment_count}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const newses = await res.json();

  const paths = newses.map((news) => ({
    params: { newsId: news.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
};
