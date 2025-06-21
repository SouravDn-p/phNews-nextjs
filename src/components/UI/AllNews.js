"use Client";

import React from "react";
import { Col, Divider, Row, Card, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;

const AllNews = ({ allNews }) => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        AllNews Page
      </h1>

      <div style={{ padding: "40px", background: "#f0f2f5" }}>
        <Row gutter={[24, 24]}>
          {allNews?.map((news, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                bodyStyle={{ padding: "16px" }}
                cover={
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
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
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Meta
                  title={
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        paddingBottom: "10px",
                        borderBottom: "8px solid black",
                        borderRadius: "4px",
                      }}
                    >
                      {news.title}
                    </h3>
                  }
                  description={
                    <p style={{ fontSize: "13px", color: "#555" }}>
                      {news.description?.slice(0, 90)}...
                    </p>
                  }
                />
                <div
                  style={{
                    marginTop: "12px",
                    fontSize: "12px",
                    color: "#777",
                    lineHeight: "1.6",
                  }}
                >
                  <div>
                    🖋 <strong>{news.author}</strong>
                  </div>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div>
                      📅 <span>{news.release_date}</span>
                    </div>
                    <div>
                      💬 <span>{news.comment_count} comments</span>
                    </div>
                    <div>
                      🏷{" "}
                      <span style={{ color: "#1890ff" }}>{news.category}</span>
                    </div>
                  </div>
                  <Link href={`/news/${news?.id}`} passHref>
                    <Button
                      type="primary"
                      block
                      style={{
                        marginTop: "16px",
                        backgroundColor: "#000",
                        borderColor: "#000",
                        color: "#fff",
                        borderRadius: "8px",
                      }}
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllNews;
