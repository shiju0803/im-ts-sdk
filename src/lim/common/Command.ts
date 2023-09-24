/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

enum MessageCommand {

    // 单聊消息 1103
    MSG_P2P = 0x44F,

    // 单聊消息同步 1108
    MSG_P2P_SYNC = 0x454,

    //发送消息已读   1106
    MSG_READ = 0x452,

    //消息接收ack 1107
    MSG_RECEIVE_ACK = 0x453,

    //单聊消息ACK 1046
    MSG_ACK = 0x416,

    // 消息撤回 1050
    MSG_RECALL = 0x41A,

    // //消息撤回通知 1052
    MSG_RECALL_NOTIFY = 0x41C,

    // 消息撤回回包 1051
    MSG_RECALL_ACK = 0x41B,

    // //消息已读通知 1053
    MSG_READ_NOTIFY = 0x41D,

}

enum FriendShipCommand {
    //添加好友 3000
    FRIEND_ADD = 0XBB8,

    //更新好友 3001
    FRIEND_UPDATE = 0XBB9,

    //删除好友 3002
    FRIEND_DELETE = 0XBBA,

    //好友申请 3003
    FRIEND_REQUEST = 0XBBB,

    //好友申请已读 3004
    FRIEND_REQUEST_READ = 0XBBC,

    //好友申请审批 3005
    FRIEND_REQUEST_APPROVE = 0XBBD,

    //添加黑名单 3006
    FRIEND_BLACK_ADD = 0XBBE,

    //移除黑名单 3007
    FRIEND_BLACK_DELETE = 0XBBF,

    //新建好友分组 3008
    FRIEND_GROUP_ADD = 0XBC0,

    //删除好友分组 3009
    FRIEND_GROUP_DELETE = 0XBC1,

    //好友分组添加成员 3010
    FRIEND_GROUP_MEMBER_ADD = 0XBC2,

    //好友分组移除成员 3011
    FRIEND_GROUP_MEMBER_DELETE = 0XBC3,

    // 删除所有好友 3012
    FRIEND_ALL_DELETE = 0XBC4
}

enum GroupCommand {
    /**
     * 推送申请入群通知 2000
     */
    JOIN_GROUP = 0X7D0,

    /**
     * 推送添加群成员 2001，通知给所有管理员和本人
     */
    ADDED_MEMBER = 0X7D1,

    /**
     * 推送创建群组通知 2002，通知给所有人
     */
    CREATED_GROUP = 0X7D2,

    /**
     * 推送更新群组通知 2003，通知给所有人
     */
    UPDATED_GROUP = 0X7D3,

    /**
     * 推送退出群组通知 2004，通知给管理员和操作人
     */
    EXIT_GROUP = 0X7D4,

    /**
     * 推送修改群成员通知 2005，通知给管理员和被操作人
     */
    UPDATED_MEMBER = 0X7D5,

    /**
     * 推送删除群成员通知 2006，通知给所有群成员和被踢人
     */
    DELETED_MEMBER = 0X7D6,

    /**
     * 推送解散群通知 2007，通知所有人
     */
    DESTROY_GROUP = 0X7D7,

    /**
     * 推送转让群主 2008，通知所有人
     */
    TRANSFER_GROUP = 0X7D8,

    /**
     * 禁言群 2009，通知所有人
     */
    MUTE_GROUP = 0X7D9,

    /**
     * 禁言/解禁 群成员 2010，通知管理员和被操作人
     */
    SPEAK_GROUP_MEMBER = 0X7DA,

    //群聊消息收发   2104
    MSG_GROUP = 0X838,

    //群聊消息收发同步消息   2105
    MSG_GROUP_SYNC = 0X839,

    // 消息已读通知给同步端 2053
    MSG_GROUP_READ_NOTIFY = 0X805,

    // 消息已读回执，给原消息发送方 2054
    MSG_GROUP_READ_RECEIPT = 0X806,

    //群聊消息ACK 2047
    GROUP_MSG_ACK = 0X7FF,
}

enum SystemCommand {
    //心跳 9999
    PING = 0X270F,

    //登陸  9000
    LOGIN = 0X2328,

    //登录ACK  9001
    LOGIN_ACK = 0X2329,

    //下线通知 用于多端互斥  9002
    MUTUAL_LOGIN = 0X232A,

    //登出  9003
    LOGOUT = 0X232B,
}

enum UserEventCommand {
    //4000
    USER_MODIFY = 0XFA0,

    //4001
    USER_ONLINE_STATUS_CHANGE = 0XFA1,

    //4002 在线状态订阅
    USER_ONLINE_STATUS_SUBSCRIBE = 0XFA2,

    //4003 拉取订阅的在线状态好友,只发送给请求端
    PULL_USER_ONLINE_STATUS = 0XFA3,

    //4004 用户在线状态通知报文
    USER_ONLINE_STATUS_CHANGE_NOTIFY = 0XFA4,

    // 4005 用户自定义状态通知同步报文
    USER_ONLINE_STATUS_SET_CHANGE_NOTIFY_SYNC = 0XFA5
}

enum ConversationEventCommand {
    //5000 会话删除
    CONVERSATION_DELETE = 0X1388,
    //5001 会话修改
    CONVERSATION_UPDATE = 0X1389,
}

export {
    MessageCommand,
    FriendShipCommand,
    GroupCommand,
    SystemCommand,
    UserEventCommand,
    ConversationEventCommand
};