"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var typeorm_1 = require("typeorm");
var channel_entity_1 = require("./channel.entity.js");
var chatter_entity_1 = require("./chatter.entity.js");
var episode_entity_1 = require("./episode.entity.js");
var Chat = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _channel_decorators;
    var _channel_initializers = [];
    var _channel_extraInitializers = [];
    var _chatter_decorators;
    var _chatter_initializers = [];
    var _chatter_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _message_extraInitializers = [];
    var _link_decorators;
    var _link_initializers = [];
    var _link_extraInitializers = [];
    var _startTime_decorators;
    var _startTime_initializers = [];
    var _startTime_extraInitializers = [];
    var _videoLength_decorators;
    var _videoLength_initializers = [];
    var _videoLength_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _deletedAt_decorators;
    var _deletedAt_initializers = [];
    var _deletedAt_extraInitializers = [];
    var _episode_decorators;
    var _episode_initializers = [];
    var _episode_extraInitializers = [];
    var Chat = _classThis = /** @class */ (function () {
        function Chat_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.channel = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _channel_initializers, void 0));
            this.chatter = (__runInitializers(this, _channel_extraInitializers), __runInitializers(this, _chatter_initializers, void 0));
            this.price = (__runInitializers(this, _chatter_extraInitializers), __runInitializers(this, _price_initializers, void 0)); // Calculated final price of this chat message
            this.message = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _message_initializers, void 0));
            this.link = (__runInitializers(this, _message_extraInitializers), __runInitializers(this, _link_initializers, void 0)); // Optional video/media link
            this.startTime = (__runInitializers(this, _link_extraInitializers), __runInitializers(this, _startTime_initializers, void 0)); // Optional start time for the video
            this.videoLength = (__runInitializers(this, _startTime_extraInitializers), __runInitializers(this, _videoLength_initializers, void 0)); // Length of the video in seconds (optional)
            this.createdAt = (__runInitializers(this, _videoLength_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.deletedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _deletedAt_initializers, void 0));
            this.episode = (__runInitializers(this, _deletedAt_extraInitializers), __runInitializers(this, _episode_initializers, void 0));
            __runInitializers(this, _episode_extraInitializers);
        }
        Chat_1.create = function (chat) {
            var newChat = new Chat();
            Object.assign(newChat, chat);
            return newChat;
        };
        return Chat_1;
    }());
    __setFunctionName(_classThis, "Chat");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _channel_decorators = [(0, typeorm_1.ManyToOne)(function () { return channel_entity_1.Channel; }, function (channel) { return channel.chats; }), (0, typeorm_1.JoinColumn)()];
        _chatter_decorators = [(0, typeorm_1.ManyToOne)(function () { return chatter_entity_1.Chatter; }, function (chatter) { return chatter.chats; }), (0, typeorm_1.JoinColumn)()];
        _price_decorators = [(0, typeorm_1.Column)("decimal", { precision: 10, scale: 2 })];
        _message_decorators = [(0, typeorm_1.Column)()];
        _link_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _startTime_decorators = [(0, typeorm_1.Column)("time", { nullable: true })];
        _videoLength_decorators = [(0, typeorm_1.Column)("int", { nullable: true })];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _deletedAt_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        _episode_decorators = [(0, typeorm_1.ManyToOne)(function () { return episode_entity_1.Episode; }, function (episode) { return episode.chats; }, { onDelete: 'CASCADE' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _channel_decorators, { kind: "field", name: "channel", static: false, private: false, access: { has: function (obj) { return "channel" in obj; }, get: function (obj) { return obj.channel; }, set: function (obj, value) { obj.channel = value; } }, metadata: _metadata }, _channel_initializers, _channel_extraInitializers);
        __esDecorate(null, null, _chatter_decorators, { kind: "field", name: "chatter", static: false, private: false, access: { has: function (obj) { return "chatter" in obj; }, get: function (obj) { return obj.chatter; }, set: function (obj, value) { obj.chatter = value; } }, metadata: _metadata }, _chatter_initializers, _chatter_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _message_extraInitializers);
        __esDecorate(null, null, _link_decorators, { kind: "field", name: "link", static: false, private: false, access: { has: function (obj) { return "link" in obj; }, get: function (obj) { return obj.link; }, set: function (obj, value) { obj.link = value; } }, metadata: _metadata }, _link_initializers, _link_extraInitializers);
        __esDecorate(null, null, _startTime_decorators, { kind: "field", name: "startTime", static: false, private: false, access: { has: function (obj) { return "startTime" in obj; }, get: function (obj) { return obj.startTime; }, set: function (obj, value) { obj.startTime = value; } }, metadata: _metadata }, _startTime_initializers, _startTime_extraInitializers);
        __esDecorate(null, null, _videoLength_decorators, { kind: "field", name: "videoLength", static: false, private: false, access: { has: function (obj) { return "videoLength" in obj; }, get: function (obj) { return obj.videoLength; }, set: function (obj, value) { obj.videoLength = value; } }, metadata: _metadata }, _videoLength_initializers, _videoLength_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _deletedAt_decorators, { kind: "field", name: "deletedAt", static: false, private: false, access: { has: function (obj) { return "deletedAt" in obj; }, get: function (obj) { return obj.deletedAt; }, set: function (obj, value) { obj.deletedAt = value; } }, metadata: _metadata }, _deletedAt_initializers, _deletedAt_extraInitializers);
        __esDecorate(null, null, _episode_decorators, { kind: "field", name: "episode", static: false, private: false, access: { has: function (obj) { return "episode" in obj; }, get: function (obj) { return obj.episode; }, set: function (obj, value) { obj.episode = value; } }, metadata: _metadata }, _episode_initializers, _episode_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Chat = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Chat = _classThis;
}();
exports.Chat = Chat;
