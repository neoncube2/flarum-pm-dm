/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/addConversationsDropdown.js":
/*!***********************************************!*\
  !*** ./src/forum/addConversationsDropdown.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/HeaderSecondary */ "flarum/forum/components/HeaderSecondary");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ConversationsDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ConversationsDropdown */ "./src/forum/components/ConversationsDropdown.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'items', function (items) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canMessage') || (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user && flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.conversations().length) {
      items.add('Messages', m(_components_ConversationsDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], null), 20);
    }
  });
}

/***/ }),

/***/ "./src/forum/components/ConversationView.js":
/*!**************************************************!*\
  !*** ./src/forum/components/ConversationView.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConversationView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MessageText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MessageText */ "./src/forum/components/MessageText.js");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/withAttr */ "flarum/common/utils/withAttr");
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_11__);












var ConversationView = /*#__PURE__*/function (_Component) {
  function ConversationView() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationView, _Component);
  var _proto = ConversationView.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this = this,
      _this$conversation;
    this.loading = true;
    this.vnode = vnode;
    this.idParam = m.route.param('id');
    this.firstLoad = true;
    this.typingTimeout = true;
    this.sendTimeout = true;
    var _typingTimeoutInterval = function typingTimeoutInterval() {
      _this.typingTimeout = true;
      setTimeout(function () {
        _typingTimeoutInterval();
      }, 5000);
    };
    var _typingInterval = function typingInterval() {
      if (_this.typingTime < new Date(Date.now() - 6000)) {
        _this.typing = false;
        m.redraw();
      }
      setTimeout(function () {
        _typingInterval();
      }, 6000);
    };
    this.sendTimeoutInterval = function () {
      if (_this.timer === 0) {
        _this.sendTimeout = true;
        m.redraw();
        return;
      }
      _this.timer--;
      if (_this.timer >= 0) {
        setTimeout(function () {
          _this.sendTimeoutInterval();
        }, 1000);
      }
    };
    _typingTimeoutInterval();
    _typingInterval();
    this.typing = false;
    (_this$conversation = this.conversation) != null ? _this$conversation : this.conversation = vnode.attrs.conversation;
    this.initPost();
  };
  _proto.initPost = function initPost() {
    this.newMessageCount = 0;
    this.load();
    this.messageContent = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()('');
    return new Promise(function () {
      setTimeout(function () {
        $('.chat-history').animate({
          scrollTop: $('.chat-history').prop('scrollHeight')
        }, 1000);
      }, 500);
    });
  };
  _proto.onremove = function onremove() {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().pusher)) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().pusher.then(function (object) {
        var channels = object.channels;
        channels.user.unbind('typing');
        channels.user.unbind('newMessage');
      });
    }
  };
  _proto.onupdate = function onupdate() {
    var _this2 = this;
    $('.chat-history').scroll(function () {
      if (!_this2.notNew) {
        var pos = $('.chat-history').scrollTop();
        if (pos === 0) {
          var firstMsg = $('.message-content:first');
          _this2.getMessages((flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().cache).messages[_this2.conversation.id()].length);
          if (!_this2.notNew) {
            $('.chat-history').scrollTop(firstMsg.offset().top);
          }
        }
      }
    });
  };
  _proto.onbeforeupdate = function onbeforeupdate() {
    var _this3 = this;
    $('.UserListItem').off('click').on('click', function (e) {
      _this3.conversation = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().cache).conversations[$(e.currentTarget).attr('id')];
      _this3.index = $(e.currentTarget).attr('id');
      _this3.notNew = false;
      _this3.cipher = null;
      _this3.oninit(_this3.vnode);
      m.redraw();
    });
    $('#MessageTextArea').off().on('keydown', function (e) {
      console.log((flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().forum));
      if (e.keyCode === 13 && flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().forum.attribute('privateMessagesReturnKey')) {
        $('#MessageTextArea').prop('disabled', true);
        _this3.sendMessage();
      }
    });
  };
  _proto.oncreate = function oncreate() {
    var _this4 = this;
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().pusher)) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().pusher.then(function (object) {
        var channels = object.channels;
        channels.user.bind('newMessage', function (data) {
          if (parseInt(data.conversationId) === parseInt(_this4.conversation.id()) && $('.MessagesDropdown').children('.Dropdown-menu').is(':visible')) {
            var message = {
              id: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(data.id),
              message: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(data.message),
              user: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(_this4.user),
              createdAt: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(data.createdAt)
            };
            _this4.decryptMessages([message]);
            _this4.newMessageCount++;
            _this4.typing = false;
            m.redraw();
            $('.chat-history').animate({
              scrollTop: $('.chat-history').prop('scrollHeight')
            }, 1000);
          }
        });
        channels.user.bind('typing', function (data) {
          if (parseInt(data.conversationId) === parseInt(_this4.conversation.id())) {
            var list = $('.chat-history');
            var scrollMore = list.scrollTop() + list.innerHeight() >= list[0].scrollHeight - 50;
            _this4.typing = true;
            _this4.typingTime = new Date();
            m.redraw();
            if (scrollMore) {
              list.animate({
                scrollTop: $('.chat-history').prop('scrollHeight')
              }, 400);
            }
          }
        });
        channels.user.bind('readMessage', function (data) {
          if (parseInt(data.conversationId) === parseInt(_this4.conversation.id())) {
            _this4.recipient.lastRead = m.prop(data.number);
            m.redraw();
          }
        });
      });
    }
  };
  _proto.view = function view() {
    var _this5 = this;
    var messages = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().cache).messages ? (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().cache).messages[this.conversation.id()] : [];
    return m("div", {
      style: this.idParam && this.isMobile() ? 'width: 100%' : '',
      className: "chat"
    }, m("div", {
      className: "chat-header clearfix"
    }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default()(this.user), m("div", {
      className: "chat-about"
    }, m("div", {
      className: "chat-with"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().translator.trans('private-messages.forum.chat.chat_with', {
      username: flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(this.user)
    })), m("div", {
      className: "chat-num-messages"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().translator.trans('private-messages.forum.chat.messages_' + (parseInt(this.conversation.totalMessages()) > 1 ? 'multiple' : 'single'), {
      count: this.conversation.totalMessages() + this.newMessageCount
    })))), (messages == null ? void 0 : messages.length) > 0 && !this.loading ? [m("div", {
      className: "chat-history"
    }, m("ul", null, this.notNew ? m("li", {
      className: "startConvo"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().translator.trans('private-messages.forum.chat.start_of_conversation')) : '', messages ? messages.filter(function (message, index, self) {
      return index === self.findIndex(function (t) {
        return t.message() === message.message();
      });
    }).sort(function (a, b) {
      return a.createdAt() - b.createdAt();
    }).map(function (message, i) {
      var myMessage = parseInt(message.user().id()) === parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().session.user.id());
      return m("li", {
        className: "clearfix message-content"
      }, m("div", {
        className: 'message-data ' + (myMessage ? 'align-right' : '')
      }, m("div", {
        className: 'avatar-inline ' + (myMessage ? 'me' : 'other')
      }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default()(myMessage ? (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().session).user : message.user())), m("span", {
        className: "message-data-name"
      }, flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(myMessage ? (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().session).user : message.user())), m("span", {
        className: "message-data-time"
      }, flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(message.createdAt()))), m(_MessageText__WEBPACK_IMPORTED_MODULE_7__["default"], {
        content: message.message(),
        className: 'message ' + (myMessage ? 'my-message float-right' : 'other-message')
      }), myMessage ? parseInt(_this5.recipient.lastRead()) >= parseInt(message.data.attributes.number) ? m("span", {
        className: "message-read"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_10___default()('fas fa-check')) : '' : '');
    }) : '', this.messageContent() ? m("li", null, m(_MessageText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      content: this.messageContent(),
      className: 'message my-message float-right message-preview',
      preview: true
    })) : '', this.typing ? m("li", null, m("div", {
      className: "tiblock"
    }, m("div", {
      className: "tidot"
    }), m("div", {
      className: "tidot"
    }), m("div", {
      className: "tidot"
    }))) : ''))] : m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default()), {
      display: "block",
      size: "medium"
    }), m("form", {
      className: "chat-message clearfix"
    }, m("textarea", {
      id: "MessageTextArea",
      value: this.messageContent(),
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9___default()('value', this.typingPush.bind(this)),
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().translator.trans('private-messages.forum.chat.text_placeholder'),
      rows: "3"
    }), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      onclick: this.sendMessage.bind(this),
      className: 'Button Button--primary',
      disabled: !this.messageContent() || !this.sendTimeout
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().translator.trans('private-messages.forum.chat.send'))));
  };
  _proto.typingPush = function typingPush(value) {
    var _this6 = this;
    this.messageContent(value);
    m.redraw();
    if (this.typingTimeout) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().request({
        method: 'POST',
        url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().forum.attribute('apiUrl') + '/private-messages/messages/typing',
        body: {
          conversationId: this.conversation.id(),
          userId: this.user.id()
        }
      }).then(function () {
        _this6.typingTimeout = false;
      });
    }
  };
  _proto.sendMessage = function sendMessage() {
    var _this7 = this;
    if (!this.sendTimeout || this.messageContent() === '' || !this.messageContent().replace(/\s/g, '').length) return;
    this.sendTimeout = false;
    this.timer = 1;
    this.sendTimeoutInterval();
    this.newMessageCount++;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().store.createRecord('messages').save({
      messageContents: this.messageContent(),
      conversationId: this.conversation.id()
    }).then(function (message) {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().cache).messages[_this7.conversation.id()].push(message);
      m.redraw();
      _this7.messageContent('');
      $('.chat-history').animate({
        scrollTop: $('.chat-history').prop('scrollHeight')
      }, 500);
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().request({
        method: 'POST',
        url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().forum.attribute('apiUrl') + '/private-messages/messages/read',
        body: {
          conversationId: _this7.conversation.id(),
          messageId: message.id()
        }
      });
    });
  };
  _proto.getMessages = function getMessages(offset) {
    var _this8 = this;
    if (offset === void 0) {
      offset = 0;
    }
    if (this.notNew) return;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().store.find('private-messages/messages', this.conversation.id(), {
      offset: offset
    }).then(function (results) {
      var _app$cache$messages$_;
      delete results.payload;
      if (_this8.firstLoad) {
        var oldNumber = _this8.meRecipient.lastRead();
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().request({
          method: 'POST',
          url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().forum.attribute('apiUrl') + '/private-messages/messages/read',
          body: {
            conversationId: _this8.conversation.id(),
            messageId: results[0].id()
          }
        }).then(function (response) {
          var newNumber = response.data.attributes.lastRead;
          var unreadMessages = 0;
          var lastUnreadMessage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().session.user.unreadMessages();
          if (lastUnreadMessage !== 0) unreadMessages = lastUnreadMessage - (newNumber - oldNumber);
          if (unreadMessages >= 0) {
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().session.user.pushAttributes({
              unreadMessages: unreadMessages
            });
            m.redraw();
          }
          _this8.firstLoad = false;
        });
      }
      (_app$cache$messages$_ = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().cache).messages[_this8.conversation.id()]).push.apply(_app$cache$messages$_, results);
      if (results.length < 20) {
        _this8.notNew = true;
      }
    }).then(function () {
      _this8.loading = false;
      m.redraw();
    });
  };
  _proto.load = function load() {
    var _app$cache,
      _app$cache$messages,
      _this9 = this,
      _app$cache$messages2,
      _this$conversation$id,
      _app$cache$messages2$;
    this.loading = true;
    m.redraw();
    (_app$cache$messages = (_app$cache = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().cache)).messages) != null ? _app$cache$messages : _app$cache.messages = [];
    this.conversation.recipients().map(function (recipient) {
      if (parseInt(recipient.user().id()) !== parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().session.user.id())) {
        _this9.user = recipient.user();
        _this9.recipient = recipient;
      } else {
        _this9.meRecipient = recipient;
      }
    });
    (_app$cache$messages2$ = (_app$cache$messages2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_11___default().cache).messages)[_this$conversation$id = this.conversation.id()]) != null ? _app$cache$messages2$ : _app$cache$messages2[_this$conversation$id] = [];
    this.getMessages();
  };
  _proto.isMobile = function isMobile() {
    return this.vnode.attrs.mobile;
  };
  return ConversationView;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/ConversationViewPage.js":
/*!******************************************************!*\
  !*** ./src/forum/components/ConversationViewPage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConversationViewPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConversationView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConversationView */ "./src/forum/components/ConversationView.js");



var ConversationViewPage = /*#__PURE__*/function (_Page) {
  function ConversationViewPage() {
    return _Page.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationViewPage, _Page);
  var _proto = ConversationViewPage.prototype;
  _proto.init = function init() {
    var _this = this;
    _Page.prototype.init.call(this);
    app.history.push('conversations');
    var idParam = m.route.param('id');
    app.store.find('private-messages/conversations', idParam).then(function (conversation) {
      app.cache.conversations = [conversation];
      _this.list = _ConversationView__WEBPACK_IMPORTED_MODULE_2__["default"].component({
        conversation: conversation,
        mobile: true
      });
      m.redraw();
    });
    this.bodyClass = 'App--messages';
  };
  _proto.view = function view() {
    return m("div", {
      className: "MessagesPage"
    }, m("div", {
      className: "ConversationsList"
    }, m("div", {
      className: "container clearfix"
    }, this.list ? this.list : null)));
  };
  return ConversationViewPage;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/ConversationsDropdown.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/ConversationsDropdown.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConversationsDropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/NotificationsDropdown */ "flarum/forum/components/NotificationsDropdown");
/* harmony import */ var flarum_forum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConversationsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConversationsList */ "./src/forum/components/ConversationsList.js");




var ConversationsDropdown = /*#__PURE__*/function (_NotificationsDropdow) {
  function ConversationsDropdown() {
    return _NotificationsDropdow.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationsDropdown, _NotificationsDropdow);
  ConversationsDropdown.initAttrs = function initAttrs(attrs) {
    attrs.label || (attrs.label = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('private-messages.forum.dropdown.tooltip'));
    attrs.icon || (attrs.icon = 'fas fa-comment-alt');
    attrs.className = 'MessagesDropdown NotificationsDropdown';
    _NotificationsDropdow.initAttrs.call(this, attrs);
  };
  var _proto = ConversationsDropdown.prototype;
  _proto.onclick = function onclick() {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().drawer.isOpen()) {
      this.goToRoute();
    }
  };
  _proto.getMenu = function getMenu() {
    return m("form", {
      className: 'Dropdown-menu ' + this.attrs.menuClassName
    }, !!this.showing && m(_ConversationsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      mobile: false
    }));
  };
  _proto.goToRoute = function goToRoute() {
    m.route(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('conversations'));
  };
  return ConversationsDropdown;
}((flarum_forum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/ConversationsList.js":
/*!***************************************************!*\
  !*** ./src/forum/components/ConversationsList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConversationsList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConversationView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConversationView */ "./src/forum/components/ConversationView.js");
/* harmony import */ var _UserListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserListItem */ "./src/forum/components/UserListItem.js");
/* harmony import */ var _StartConversationModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StartConversationModal */ "./src/forum/components/StartConversationModal.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_6__);







var ConversationsList = /*#__PURE__*/function (_Component) {
  function ConversationsList() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationsList, _Component);
  var _proto = ConversationsList.prototype;
  _proto.oninit = function oninit(vnode) {
    this.mobile = vnode.attrs.mobile;
    this.load();
    this.loading = false;
  };
  _proto.onupdate = function onupdate() {};
  _proto.onbeforeupdate = function onbeforeupdate() {
    var _this = this;
    var list = $('.ConversationsList-list');
    list.off('scroll').on('scroll', function () {
      if (list.scrollTop() + list.innerHeight() >= list[0].scrollHeight) {
        _this.loadMore();
      }
    });
  };
  _proto.view = function view() {
    var _this2 = this;
    if (this.loading) return;
    var conversations = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).conversations;
    if (this.currentConversation === null && (conversations == null ? void 0 : conversations.length) > 0) {
      this.currentConversation = conversations[0];
    }
    if (this.currentConversation) {
      this.conversationComponent = _ConversationView__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        conversation: this.currentConversation,
        mobile: this.mobile
      });
    }
    var hasConversations = (conversations == null ? void 0 : conversations.length) > 0;
    var redrawConversationsList = function redrawConversationsList() {
      return m.redraw();
    };
    return m("div", {
      className: "ConversationsList"
    }, m("div", {
      style: hasConversations ? '' : 'width: unset; padding: 10px;',
      className: "container clearfix"
    }, m("div", {
      style: this.mobile ? 'float: unset; margin: 0 auto; display: block;' : '',
      className: "people-list",
      id: "people-list"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default().component({
      onclick: this.showModal.bind(this),
      className: 'Button Button--primary',
      disabled: !flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute('canMessage')
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute('canMessage') ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().translator.trans('private-messages.forum.chat.start') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().translator.trans('private-messages.forum.chat.cant_start')), hasConversations && m("ul", {
      className: "ConversationsList-list"
    }, Array.isArray(conversations) && conversations.map(function (conversation, index) {
      return m(_UserListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        conversation: conversation,
        index: index,
        active: _this2.mobile ? false : _this2.currentConversation === conversation,
        onclick: function onclick(e) {
          if (_this2.mobile) {
            m.route(flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().route('messages', {
              id: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).conversations[$(e.currentTarget).attr('id')].id()
            }));
          } else {
            _this2.currentConversation = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).conversations[$(e.currentTarget).attr('id')];
            redrawConversationsList();
          }
        }
      });
    }))), !this.mobile && this.conversationComponent));
  };
  _proto.showModal = function showModal() {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().modal.show(_StartConversationModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      conversations: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).conversations,
      messages: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).messages
    });
  };
  _proto.loadMore = function loadMore() {
    var _this3 = this;
    this.loading = true;
    m.redraw();
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().store.find('private-messages/conversations', {
      offset: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).conversations.length
    }).then(function (results) {
      delete results.payload;
      results.map(function (result) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache.conversations.push(result);
      });
    })["catch"](function () {}).then(function () {
      _this3.loading = false;
      m.redraw();
    });
  };
  _proto.load = function load() {
    var _this4 = this;
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).conversations && !this.mobile) {
      return;
    }
    if (this.mobile) {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).conversations = [];
    }
    this.loading = true;
    m.redraw();
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().store.find('private-messages/conversations').then(function (results) {
      delete results.payload;
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().cache).conversations = results;
    })["catch"](function () {}).then(function () {
      _this4.loading = false;
      m.redraw();
    });
  };
  return ConversationsList;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/ConversationsPage.js":
/*!***************************************************!*\
  !*** ./src/forum/components/ConversationsPage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConversationsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConversationsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConversationsList */ "./src/forum/components/ConversationsList.js");



var ConversationsPage = /*#__PURE__*/function (_Page) {
  function ConversationsPage() {
    return _Page.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationsPage, _Page);
  var _proto = ConversationsPage.prototype;
  _proto.oninit = function oninit() {
    _Page.prototype.oninit.call(this);
    app.history.push('messages');
    this.bodyClass = 'App--conversations';
  };
  _proto.view = function view() {
    return m("div", {
      className: "ConversationsPage"
    }, m(_ConversationsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      mobile: true
    }));
  };
  return ConversationsPage;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/MessageText.js":
/*!*********************************************!*\
  !*** ./src/forum/components/MessageText.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageText)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);


var MessageText = /*#__PURE__*/function (_Component) {
  function MessageText() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MessageText, _Component);
  MessageText.initAttrs = function initAttrs(attrs) {
    var _attrs$className, _attrs$content, _attrs$preview;
    (_attrs$className = attrs.className) != null ? _attrs$className : attrs.className = '';
    (_attrs$content = attrs.content) != null ? _attrs$content : attrs.content = '';
    (_attrs$preview = attrs.preview) != null ? _attrs$preview : attrs.preview = false;
  };
  var _proto = MessageText.prototype;
  _proto.view = function view() {
    return m("div", {
      className: this.attrs.className
    });
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this = this;
    _Component.prototype.oncreate.call(this, vnode);
    if (this.attrs.preview) {
      var preview;
      var updatePreview = function updatePreview() {
        var content = _this.attrs.content;
        if (preview === content) return;
        preview = content;
        s9e.TextFormatter.preview(content || '', vnode.dom);
      };
      updatePreview();
      this.updateInterval = setInterval(updatePreview, 50);
    } else {
      s9e.TextFormatter.preview(this.attrs.content, vnode.dom);
    }
  };
  _proto.onremove = function onremove() {
    clearInterval(this.updateInterval);
  };
  return MessageText;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/PrivateMessageReceivedNotification.js":
/*!********************************************************************!*\
  !*** ./src/forum/components/PrivateMessageReceivedNotification.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrivateMessageReceivedNotification)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);


// import username from 'flarum/common/helpers/username';
var PrivateMessageReceivedNotification = /*#__PURE__*/function (_Notification) {
  function PrivateMessageReceivedNotification() {
    return _Notification.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateMessageReceivedNotification, _Notification);
  var _proto = PrivateMessageReceivedNotification.prototype;
  _proto.icon = function icon() {
    return 'fas fa-message';
  };
  _proto.href = function href() {
    var notification = this.attrs.notification;
    var discussion = notification.subject();
    var content = notification.content() || {};
    return app.route.discussion(discussion, content.postNumber);
  };
  _proto.content = function content() {
    return app.translator.trans('private-messages.forum.notifications.message_received', {
      user: this.attrs.notification.fromUser()
    });
  };
  return PrivateMessageReceivedNotification;
}((flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/RecipientSearch.js":
/*!*************************************************!*\
  !*** ./src/forum/components/RecipientSearch.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecipientSearch)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Search */ "flarum/forum/components/Search");
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserSearchSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSearchSource */ "./src/forum/components/UserSearchSource.js");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recipientLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipientLabel */ "./src/forum/components/recipientLabel.js");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/withAttr */ "flarum/common/utils/withAttr");
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_10__);











var RecipientSearch = /*#__PURE__*/function (_Search) {
  function RecipientSearch() {
    return _Search.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RecipientSearch, _Search);
  var _proto = RecipientSearch.prototype;
  _proto.oninit = function oninit(attrs) {
    this.value = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()();
    _Search.prototype.oninit.call(this, attrs);
  };
  _proto.updateMaxHeight = function updateMaxHeight() {
    // stub
  };
  _proto.view = function view() {
    var _this$sources,
      _this = this;
    if (this.value == null) {
      this.value('');
    }
    var loading = this.value() && this.value().length >= 3;
    (_this$sources = this.sources) != null ? _this$sources : this.sources = this.sourceItems().toArray();
    return m("div", {
      className: "AddRecipientModal-body"
    }, (flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().cache).conversationsRecipient === null ? m("div", {
      className: "AddRecipientModal-form-input"
    }, m("input", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default()('RecipientsInput FormControl', {
        open: !!this.value(),
        focused: !!this.value(),
        active: !!this.value(),
        loading: !!this.loadingSources
      }),
      config: function config(element) {
        element.focus();
      },
      type: "search",
      placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('private-messages.forum.modal.search_recipients')),
      value: this.value(),
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9___default()('value', this.value),
      onfocus: function onfocus() {
        return _this.hasFocus = true;
      },
      onblur: function onblur() {
        return _this.hasFocus = false;
      },
      onkeyup: function onkeyup() {
        clearTimeout(_this.typingTimer);
        _this.doSearch = false;
        _this.typingTimer = setTimeout(function () {
          _this.doSearch = true;
          m.redraw();
        }, 900);
      },
      onkeydown: function onkeydown() {
        clearTimeout(_this.typingTimer);
      }
    }), m("ul", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default()('Dropdown-menu Search-results fade', {
        "in": !!loading
      }),
      onclick: function onclick() {
        var target = _this.$('.SearchResult.active');
        _this.addRecipient(target.data('index'));
        _this.$('.RecipientsInput').trigger('focus');
      }
    }, !this.doSearch ? flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default().component({
      size: 'tiny',
      className: 'Button Button--icon Button--link'
    }) : this.sources.map(function (source) {
      return source.view(_this.value());
    }), m("li", null, m("span", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('private-messages.forum.modal.more_users'))))) : m("div", {
      className: "RecipientsInput-selected RecipientsLabel"
    }, (0,_recipientLabel__WEBPACK_IMPORTED_MODULE_7__["default"])((flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().cache).conversationsRecipient, {
      onclick: function onclick() {
        _this.removeRecipient((flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().cache).conversationsRecipient);
      }
    })));
  }

  /**
   * Build an item list of SearchSources.
   *
   * @return {ItemList}
   */;
  _proto.sourceItems = function sourceItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    items.add('users', new _UserSearchSource__WEBPACK_IMPORTED_MODULE_2__["default"]());
    return items;
  }

  /**
   * Clear the search input and the current controller's active search.
   */;
  _proto.clear = function clear() {
    this.value('');
    m.redraw();
  }

  /**
   * Adds a recipient.
   *
   * @param value
   */;
  _proto.addRecipient = function addRecipient(value) {
    (flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().cache).conversationsRecipient = flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().store.getById('users', value);
    this.clear();
  }

  /**
   * Removes a recipient.
   *
   * @param recipient
   */;
  _proto.removeRecipient = function removeRecipient(recipient) {
    (flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().cache).conversationsRecipient = null;
    m.redraw();
  }

  /**
   * Loads a recipient from the global store.
   *
   * @param store
   * @param id
   * @returns {Model}
   */;
  _proto.findRecipient = function findRecipient(store, id) {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().store.getById(store, id);
  };
  return RecipientSearch;
}((flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/StartConversationModal.js":
/*!********************************************************!*\
  !*** ./src/forum/components/StartConversationModal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StartConversationModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RecipientSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecipientSearch */ "./src/forum/components/RecipientSearch.js");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/withAttr */ "flarum/common/utils/withAttr");
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_7__);








var StartConversationModal = /*#__PURE__*/function (_Modal) {
  function StartConversationModal() {
    return _Modal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StartConversationModal, _Modal);
  var _proto = StartConversationModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    (flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().cache).conversationsRecipient = null;
    this.conversations = this.attrs.conversations;
    this.already = false;
    this.messageContent = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()('');
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().translator.trans('private-messages.forum.modal.title');
  };
  _proto.className = function className() {
    return 'StartConversationModal Modal--medium';
  };
  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body",
      onclick: function onclick(e) {
        return e.stopImmediatePropagation();
      }
    }, this.already ? [m("h2", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().translator.trans('private-messages.forum.modal.already', {
      username: flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(this.recpient)
    })), m("h2", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().translator.trans('private-messages.forum.modal.copied', {
      username: flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(this.recpient)
    }))] : m("div", null, m("div", {
      "class": "helpText"
    }, (flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().cache).conversationsRecipient !== null ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().translator.trans('private-messages.forum.modal.help_start', {
      username: flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()((flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().cache).conversationsRecipient)
    }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().translator.trans('private-messages.forum.modal.help')), m("div", {
      className: "AddRecipientModal-form"
    }, m(_RecipientSearch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      state: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().search)
    }), (flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().cache).conversationsRecipient !== null ? m("div", {
      className: "AddRecipientModal-form-submit"
    }, m("textarea", {
      value: this.messageContent(),
      oninput: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_6___default()('value', this.messageContent),
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().translator.trans('private-messages.forum.chat.text_placeholder'),
      rows: "3"
    }), flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      type: 'submit',
      className: 'Button Button--primary',
      disabled: !this.messageContent()
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().translator.trans('private-messages.forum.modal.submit'))) : '')))];
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    var recipient = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().cache).conversationsRecipient;
    this.recpient = recipient;
    (flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().cache).conversationsRecipient = null;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().store.createRecord('conversations').save({
      messageContents: this.messageContent(),
      recipient: recipient.id()
    }).then(function (conversation) {
      if (!conversation.notNew()) {
        _this.conversations.push(conversation);
        // const preconv = app.session.user.conversations();
        // preconv.push(conversation);
        // app.session.user.conversations = Stream(preconv);
        m.redraw();
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_7___default().modal.close();
      } else {
        var input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = _this.messageContent();
        input.focus();
        input.select();
        document.execCommand('Copy');
        input.remove();
        _this.already = true;
        m.redraw();
      }
    });
  };
  return StartConversationModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/UserListItem.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UserListItem.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/userOnline */ "flarum/common/helpers/userOnline");
/* harmony import */ var flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);






var UserListItem = /*#__PURE__*/function (_Component) {
  function UserListItem() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserListItem, _Component);
  var _proto = UserListItem.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this$conversation$re,
      _this = this;
    this.conversation = vnode.attrs.conversation;
    this.user = null;
    var userId = parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().session.user.id());
    this.user = (_this$conversation$re = this.conversation.recipients().find(function (recipient) {
      return parseInt(recipient.user().id()) !== userId;
    })) == null ? void 0 : _this$conversation$re.user();
    m.redraw();
    var _typingInterval = function typingInterval() {
      if (_this.typingTime < new Date(Date.now() - 6000)) {
        _this.typing = false;
        m.redraw();
      }
      setTimeout(function () {
        _typingInterval();
      }, 6000);
    };
    _typingInterval();
    _Component.prototype.oncreate.call(this, vnode);
  };
  _proto.onremove = function onremove(vnode) {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().pusher)) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().pusher.then(function (object) {
        object.channels.user.unbind('typing');
      });
    }
    _Component.prototype.onremove.call(this, vnode);
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this2 = this;
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().pusher)) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().pusher.then(function (object) {
        var channels = object.channels;
        channels.user.bind('typing', function (data) {
          if (parseInt(data.conversationId) === parseInt(_this2.conversation.id())) {
            _this2.typing = true;
            _this2.typingTime = new Date();
            m.redraw();
          }
        });
      });
    }
    _Component.prototype.oncreate.call(this, vnode);
  };
  _proto.view = function view(vnode) {
    if (!this.user) return null;
    return m("li", {
      id: vnode.attrs.index,
      className: vnode.attrs.active ? 'UserListItem active' : 'UserListItem',
      onclick: vnode.attrs.onclick
    }, m("div", {
      className: "UserListItem-content"
    }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(this.user), m("div", {
      className: "info"
    }, flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.user), flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_4___default()(this.user)), this.typing && m("div", {
      className: "tiblock"
    }, m("div", {
      className: "tidot"
    }))));
  };
  return UserListItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/UserSearchSource.js":
/*!**************************************************!*\
  !*** ./src/forum/components/UserSearchSource.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserSearchSource)
/* harmony export */ });
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/helpers/highlight */ "flarum/common/helpers/highlight");
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2__);



var UserSearchSource = /*#__PURE__*/function () {
  function UserSearchSource() {}
  var _proto = UserSearchSource.prototype;
  _proto.view = function view(query) {
    var _app$cache,
      _app$cache$conversati,
      _this = this;
    if (query.length < 3 || this.loading) return;
    (_app$cache$conversati = (_app$cache = app.cache).conversationResults) != null ? _app$cache$conversati : _app$cache.conversationResults = [];
    this.query = query;
    if (!app.cache.conversationResults[this.query]) {
      this.loading = true;
      app.cache.conversationResults[this.query] = [];
      app.store.find('users', {
        filter: {
          q: this.query
        },
        page: {
          limit: 5
        }
      }).then(this.pushResults.bind(this));
    } else return [m("li", {
      className: "Dropdown-header"
    }, app.translator.trans('core.forum.search.users_heading')), app.cache.conversationResults[this.query].map(function (user) {
      var name = flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(user);
      name = flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default()(name.text, _this.query);
      return m("li", {
        className: "SearchResult",
        "data-index": user.id()
      }, m("a", {
        "data-index": 'users:' + user.id()
      }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_1___default()(user), name));
    })];
  };
  _proto.pushResults = function pushResults(results) {
    var _this2 = this;
    results.payload.data.map(function (result) {
      var user = app.store.getById('users', result.id);
      if (parseInt(user.id()) !== parseInt(app.session.user.id())) {
        app.cache.conversationResults[_this2.query].push(user);
      }
    });
    this.loading = false;
    m.redraw();
  };
  return UserSearchSource;
}();


/***/ }),

/***/ "./src/forum/components/recipientLabel.js":
/*!************************************************!*\
  !*** ./src/forum/components/recipientLabel.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ recipientLabel)
/* harmony export */ });
/* harmony import */ var flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/utils/extract */ "flarum/common/utils/extract");
/* harmony import */ var flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2__);



function recipientLabel(recipient, attrs) {
  var _attrs, _attrs$style;
  if (attrs === void 0) {
    attrs = {};
  }
  (_attrs$style = (_attrs = attrs).style) != null ? _attrs$style : _attrs.style = {};
  attrs.className = 'RecipientLabel ' + (attrs.className || '');
  var link = flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_0___default()(attrs, 'link');
  return m(link ? 'a' : 'span', attrs, m("span", {
    className: "RecipientLabel-text"
  }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_1___default()(recipient), flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(recipient)));
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/NotificationGrid */ "flarum/forum/components/NotificationGrid");
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Message */ "./src/forum/models/Message.js");
/* harmony import */ var _models_Conversation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Conversation */ "./src/forum/models/Conversation.js");
/* harmony import */ var _models_ConversationUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/ConversationUser */ "./src/forum/models/ConversationUser.js");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ConversationsPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ConversationsPage */ "./src/forum/components/ConversationsPage.js");
/* harmony import */ var _components_ConversationViewPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ConversationViewPage */ "./src/forum/components/ConversationViewPage.js");
/* harmony import */ var _components_PrivateMessageReceivedNotification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/PrivateMessageReceivedNotification */ "./src/forum/components/PrivateMessageReceivedNotification.js");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _addConversationsDropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addConversationsDropdown */ "./src/forum/addConversationsDropdown.js");














flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('private-messages', function (app) {
  app.store.models.messages = _models_Message__WEBPACK_IMPORTED_MODULE_4__["default"];
  app.store.models.conversations = _models_Conversation__WEBPACK_IMPORTED_MODULE_5__["default"];
  app.store.models.conversation_users = _models_ConversationUser__WEBPACK_IMPORTED_MODULE_6__["default"];
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_7___default().prototype).conversations = flarum_common_Model__WEBPACK_IMPORTED_MODULE_8___default().hasMany('conversations');
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_7___default().prototype).unreadMessages = flarum_common_Model__WEBPACK_IMPORTED_MODULE_8___default().attribute('unreadMessages');
  app.notificationComponents.privateMessageReceived = _components_PrivateMessageReceivedNotification__WEBPACK_IMPORTED_MODULE_11__["default"];
  app.routes.conversations = {
    path: '/private-messages/conversations',
    component: _components_ConversationsPage__WEBPACK_IMPORTED_MODULE_9__["default"]
  };
  app.routes.messages = {
    path: '/private-messages/messages/:id',
    component: _components_ConversationViewPage__WEBPACK_IMPORTED_MODULE_10__["default"]
  };
  (0,_addConversationsDropdown__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function () {
    if (app.pusher) {
      app.pusher.then(function (object) {
        var channels = object.channels;
        if (channels.user) {
          channels.user.bind('newMessage', function (data) {
            app.session.user.unreadMessages = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_12___default()(app.session.user.unreadMessages() + 1);
            m.redraw();
          });
        }
      });
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'onremove', function () {
    if (app.pusher) {
      app.pusher.then(function (object) {
        var channels = object.channels;
        if (channels.user) {
          channels.user.unbind('newMessage');
        }
      });
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'notificationTypes', function (items) {
    items.add('privateMessgeReceived', {
      name: 'privateMessgeReceived',
      icon: 'fas fa-comment-alt',
      label: app.translator.trans('private-messages.forum.notifications.notify_message_received')
    });
  });
});

/***/ }),

/***/ "./src/forum/models/Conversation.js":
/*!******************************************!*\
  !*** ./src/forum/models/Conversation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Conversation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);



var Conversation = /*#__PURE__*/function (_mixin) {
  function Conversation() {
    return _mixin.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Conversation, _mixin);
  var _proto = Conversation.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return "/private-messages/conversations" + (this.exists ? "/" + this.data.id : '');
  };
  return Conversation;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  messages: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('messages'),
  recipients: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('recipients'),
  totalMessages: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('totalMessages'),
  notNew: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('notNew'),
  createdAt: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate)),
  updatedAt: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('updatedAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate))
}));


/***/ }),

/***/ "./src/forum/models/ConversationUser.js":
/*!**********************************************!*\
  !*** ./src/forum/models/ConversationUser.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConversationUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);



var ConversationUser = /*#__PURE__*/function (_mixin) {
  function ConversationUser() {
    return _mixin.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationUser, _mixin);
  return ConversationUser;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  conversation: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('conversation'),
  user: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('user'),
  userId: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('userId'),
  conversationId: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('conversationId'),
  lastRead: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('lastRead')
}));


/***/ }),

/***/ "./src/forum/models/Message.js":
/*!*************************************!*\
  !*** ./src/forum/models/Message.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);



var Message = /*#__PURE__*/function (_mixin) {
  function Message() {
    return _mixin.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Message, _mixin);
  var _proto = Message.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return "/private-messages/messages" + (this.exists ? "/" + this.data.id : '');
  };
  return Message;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  message: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('message'),
  user: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('user'),
  isHidden: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isHidden'),
  createdAt: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate)),
  conversation: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('conversation'),
  number: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('number')
}));


/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/highlight":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/highlight']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/highlight'];

/***/ }),

/***/ "flarum/common/helpers/humanTime":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/humanTime']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/humanTime'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/userOnline":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/userOnline']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/userOnline'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extract":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extract']" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extract'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/common/utils/mixin":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/utils/mixin']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/mixin'];

/***/ }),

/***/ "flarum/common/utils/withAttr":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/withAttr']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/withAttr'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/HeaderSecondary":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderSecondary']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderSecondary'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Notification']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Notification'];

/***/ }),

/***/ "flarum/forum/components/NotificationGrid":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/NotificationGrid']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/NotificationGrid'];

/***/ }),

/***/ "flarum/forum/components/NotificationsDropdown":
/*!*******************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/NotificationsDropdown']" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/NotificationsDropdown'];

/***/ }),

/***/ "flarum/forum/components/Search":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Search']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Search'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map