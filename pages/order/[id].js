import { client } from "../../lib/client";
import Layout from "../../components/Layout";
import css from "../../styles/Order.module.css";
import { UilBill } from "@iconscout/react-unicons";
import Image from "next/image";
import Cooking from "../../assets/cooking.png";
import OnWay from "../../assets/onway.png";
import Spinner from "../../assets/spinner.svg";
import { UilBox } from "@iconscout/react-unicons";
import { useEffect } from "react";
export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);
  return {
    props: {
      order: order[0],
    },
  };
};
export default function Orders({ order }) {
  useEffect(() => {
    if (order.status > 3) {
      localStorage.clear();
    }
  }, [order]);
  return (
    <Layout>
      <div className={css.container}>
        <span className={css.heading}>Thông tin đơn hàng</span>
        <div className={css.details}>
          <div>
            <span>Đơn hàng Id</span>
            <span>{order._id}</span>
          </div>
          <div>
            <span>Tên Khách Hàng</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Số Điện Thoại</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Hình thức thanh toán</span>
            <span>
              {order.method === 0 ? "Thanh toán khi giao hàng" : "Thanh toán Online(Đã thanh toán)"}
            </span>
          </div>
          <div>
            <span>Thành tiền</span>
            <span>{order.total}.000VND</span>
          </div>
        </div>

        <div className={css.statusContainer}>
          <div className={css.status}>
            <UilBill width={50} height={50} />
            <span>Thanh toán </span>
            {order.method === 0 ? (
              <span className={css.pending}>Khi giao hàng</span>
            ) : (
              <span className={css.completed}>Đã hoàn thành</span>
            )}
          </div>

          <div className={css.status}>
            <Image src={Cooking} alt="" width={50} height={50} />
            <span>Đang làm</span>
            {order.status === 1 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {order.status > 1 && (
              <span className={css.completed}>Đã hoàn thành</span>
            )}
          </div>

          <div className={css.status}>
            <Image src={OnWay} alt="" width={50} height={50} />
            <span>Đang giao</span>
            {order.status === 2 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {order.status > 2 && (
              <span className={css.completed}>Đã hoàn thành</span>
            )}
          </div>

          <div className={css.status}>
            <UilBox width={50} height={50} />
            <span>Đã giao</span>
            {order.status === 3 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}
            {order.status > 3 && (
              <span className={css.completed}>Đã hoàn thành</span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
