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
exports.Channel = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var chat_entity_1 = require("./chat.entity");
var chatConfig_entity_1 = require("./chatConfig.entity");
var episode_entity_1 = require("./episode.entity");
var Channel = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _url_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _owner_decorators;
    var _owner_initializers = [];
    var _owner_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _deletedAt_decorators;
    var _deletedAt_initializers = [];
    var _deletedAt_extraInitializers = [];
    var _chats_decorators;
    var _chats_initializers = [];
    var _chats_extraInitializers = [];
    var _chatConfigs_decorators;
    var _chatConfigs_initializers = [];
    var _chatConfigs_extraInitializers = [];
    var _episodes_decorators;
    var _episodes_initializers = [];
    var _episodes_extraInitializers = [];
    var Channel = _classThis = /** @class */ (function () {
        function Channel_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.url = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _url_initializers, void 0));
            this.description = (__runInitializers(this, _url_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.owner = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _owner_initializers, void 0));
            this.createdAt = (__runInitializers(this, _owner_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.deletedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _deletedAt_initializers, void 0));
            this.chats = (__runInitializers(this, _deletedAt_extraInitializers), __runInitializers(this, _chats_initializers, void 0));
            this.chatConfigs = (__runInitializers(this, _chats_extraInitializers), __runInitializers(this, _chatConfigs_initializers, void 0)); // Array of rules for chat pricing
            this.episodes = (__runInitializers(this, _chatConfigs_extraInitializers), __runInitializers(this, _episodes_initializers, void 0));
            __runInitializers(this, _episodes_extraInitializers);
        }
        Channel_1.create = function (channel) {
            var newChannel = new Channel();
            Object.assign(newChannel, channel);
            return newChannel;
        };
        return Channel_1;
    }());
    __setFunctionName(_classThis, "Channel");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)({ unique: true })];
        _url_decorators = [(0, typeorm_1.Column)({ unique: true })];
        _description_decorators = [(0, typeorm_1.Column)()];
        _owner_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.channels; }), (0, typeorm_1.JoinColumn)()];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _deletedAt_decorators = [(0, typeorm_1.DeleteDateColumn)()];
        _chats_decorators = [(0, typeorm_1.OneToMany)(function () { return chat_entity_1.Chat; }, function (chat) { return chat.channel; })];
        _chatConfigs_decorators = [(0, typeorm_1.OneToMany)(function () { return chatConfig_entity_1.ChatConfig; }, function (chatConfig) { return chatConfig.channel; }, {
                cascade: true,
            })];
        _episodes_decorators = [(0, typeorm_1.OneToMany)(function () { return episode_entity_1.Episode; }, function (episode) { return episode.channel; }, { cascade: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _owner_decorators, { kind: "field", name: "owner", static: false, private: false, access: { has: function (obj) { return "owner" in obj; }, get: function (obj) { return obj.owner; }, set: function (obj, value) { obj.owner = value; } }, metadata: _metadata }, _owner_initializers, _owner_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _deletedAt_decorators, { kind: "field", name: "deletedAt", static: false, private: false, access: { has: function (obj) { return "deletedAt" in obj; }, get: function (obj) { return obj.deletedAt; }, set: function (obj, value) { obj.deletedAt = value; } }, metadata: _metadata }, _deletedAt_initializers, _deletedAt_extraInitializers);
        __esDecorate(null, null, _chats_decorators, { kind: "field", name: "chats", static: false, private: false, access: { has: function (obj) { return "chats" in obj; }, get: function (obj) { return obj.chats; }, set: function (obj, value) { obj.chats = value; } }, metadata: _metadata }, _chats_initializers, _chats_extraInitializers);
        __esDecorate(null, null, _chatConfigs_decorators, { kind: "field", name: "chatConfigs", static: false, private: false, access: { has: function (obj) { return "chatConfigs" in obj; }, get: function (obj) { return obj.chatConfigs; }, set: function (obj, value) { obj.chatConfigs = value; } }, metadata: _metadata }, _chatConfigs_initializers, _chatConfigs_extraInitializers);
        __esDecorate(null, null, _episodes_decorators, { kind: "field", name: "episodes", static: false, private: false, access: { has: function (obj) { return "episodes" in obj; }, get: function (obj) { return obj.episodes; }, set: function (obj, value) { obj.episodes = value; } }, metadata: _metadata }, _episodes_initializers, _episodes_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Channel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Channel = _classThis;
}();
exports.Channel = Channel;
