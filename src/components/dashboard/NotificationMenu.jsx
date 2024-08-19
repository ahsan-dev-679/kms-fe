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
                <IoIosNotificationsOutline
                  className="cursor-pointer"
                  size={30}
                />
              </Indicator>
            ) : (
              <IoIosNotificationsOutline className="cursor-pointer" size={30} />
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
