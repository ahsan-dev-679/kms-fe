import React, { useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Menu, Divider, Indicator, Button, Group } from "@mantine/core";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { notifications } from "@/data/data";
import { IconBell } from "@tabler/icons-react";

const NotificationMenu = () => {
  const unreadCount = 8;
  return (
    <div>
      <Menu
        classNames={{
          dropdown: "max-h-[400px] overflow-y-auto",
          item: "padding-0",
        }}
        shadow="md"
        width={340}
        position="bottom-end"
      >
        <Menu.Target>
          <div className="cursor-pointer flex items-center">
            {unreadCount > 1 ? (
              <Indicator
                inline
                processing={unreadCount > 0 ? true : false}
                label={unreadCount}
                color="red"
                position="top-end"
                size={18}
              >
                <button className="md:w-[50px] w-[35px] h-[35px] notify md:h-[50px] rounded-lg md:rounded-2xl cursor-pointer relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 448 512"
                    className="bell w-[14px] md:w-[18px]"
                  >
                    <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
                  </svg>
                </button>
                {/* <IoIosNotificationsOutline
                  className="cursor-pointer"
                  size={30}
                /> */}
              </Indicator>
            ) : (
              // <IoIosNotificationsOutline className="cursor-pointer" size={30} />
              <button className="md:w-[50px] w-[35px] h-[35px] notify md:h-[50px] rounded-lg md:rounded-2xl cursor-pointer relative flex items-center justify-center">
                <svg
                  viewBox="0 0 448 512"
                  className="bell w-[14px] md:w-[18px]"
                >
                  <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
                </svg>
              </button>
            )}
          </div>
        </Menu.Target>
        <div classNames="overflow-y-auto">
          <Menu.Dropdown classNames="overflow-y-auto max-h-[600px]">
            <div className="my-2">
              <p className="noti-heading mb-0 px-3">Notifications</p>
            </div>
            <Divider />
            {notifications?.length > 0 ? (
              notifications?.map((value, i) => {
                const date = moment(value?.createdAt).format("DD MMM YYYY");
                return (
                  <Menu.Item className="noti-menu" key={i}>
                    <div
                      className={`my-2 py-[8px] px-[16px] rounded-md flex flex-col  ${
                        value?.isRead ? "bg-[#f2f3f4]" : "bg-[#f2f3f4]"
                      } `}
                    >
                      <Indicator
                        disabled={value?.isRead}
                        inline
                        label="New"
                        offset={6}
                        size={16}
                        position="top-start"
                        className="py-3"
                        color="#5BC490"
                      >
                        <p className="pb-1 text-sm font-semibold text-[#3e3e3e]">
                          {value?.message}
                        </p>
                        <p className="text-[#6a6a6a]">{date}</p>
                      </Indicator>

                      <Group justify="flex-end">
                        {value?.type === "account" ? (
                          <>
                            <Button
                              onClick={() => alert("Rejected")}
                              variant="default"
                            >
                              Reject
                            </Button>
                            <Button
                              onClick={() => alert("Accepted")}
                              loading={false}
                              variant="filled"
                              color="#5BC490"
                            >
                              Accept
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              onClick={() => alert("Accepted")}
                              loading={false}
                              variant="filled"
                              color="#5BC490"
                            >
                              View
                            </Button>
                          </>
                        )}
                      </Group>
                    </div>
                  </Menu.Item>
                );
              })
            ) : (
              <div className="loader-box flex flex-column justify-center items-center  h-[200px]">
                <div>
                  <p className="text-center font-bold mb-0 no-result-heading">
                    No unread notification
                  </p>
                  <p className="no-result-text">
                    There are no unread notifictaions yet !
                  </p>
                </div>
              </div>
            )}
          </Menu.Dropdown>
        </div>
      </Menu>
    </div>
  );
};

export default NotificationMenu;
