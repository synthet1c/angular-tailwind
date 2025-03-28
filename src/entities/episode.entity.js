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
exports.Episode = void 0;
var typeorm_1 = require("typeorm");
var channel_entity_1 = require("./channel.entity");
var chat_entity_1 = require("./chat.entity");
var Episode = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _start_decorators;
    var _start_initializers = [];
    var _start_extraInitializers = [];
    var _end_decorators;
    var _end_initializers = [];
    var _end_extraInitializers = [];
    var _timezone_decorators;
    var _timezone_initializers = [];
    var _timezone_extraInitializers = [];
    var _channel_decorators;
    var _channel_initializers = [];
    var _channel_extraInitializers = [];
    var _chats_decorators;
    var _chats_initializers = [];
    var _chats_extraInitializers = [];
    var Episode = _classThis = /** @class */ (function () {
        function Episode_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.createdAt = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.start = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _start_initializers, void 0));
            this.end = (__runInitializers(this, _start_extraInitializers), __runInitializers(this, _end_initializers, void 0));
            this.timezone = (__runInitializers(this, _end_extraInitializers), __runInitializers(this, _timezone_initializers, void 0));
            this.channel = (__runInitializers(this, _timezone_extraInitializers), __runInitializers(this, _channel_initializers, void 0));
            this.chats = (__runInitializers(this, _channel_extraInitializers), __runInitializers(this, _chats_initializers, void 0));
            __runInitializers(this, _chats_extraInitializers);
        }
        Episode_1.create = function (episode) {
            var newEpisode = new Episode();
            Object.assign(newEpisode, episode);
            return newEpisode;
        };
        return Episode_1;
    }());
    __setFunctionName(_classThis, "Episode");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _start_decorators = [(0, typeorm_1.Column)()];
        _end_decorators = [(0, typeorm_1.Column)()];
        _timezone_decorators = [(0, typeorm_1.Column)()];
        _channel_decorators = [(0, typeorm_1.ManyToOne)(function () { return channel_entity_1.Channel; }, function (channel) { return channel.episodes; }, { onDelete: 'CASCADE' })];
        _chats_decorators = [(0, typeorm_1.OneToMany)(function () { return chat_entity_1.Chat; }, function (chat) { return chat.episode; }, { cascade: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _start_decorators, { kind: "field", name: "start", static: false, private: false, access: { has: function (obj) { return "start" in obj; }, get: function (obj) { return obj.start; }, set: function (obj, value) { obj.start = value; } }, metadata: _metadata }, _start_initializers, _start_extraInitializers);
        __esDecorate(null, null, _end_decorators, { kind: "field", name: "end", static: false, private: false, access: { has: function (obj) { return "end" in obj; }, get: function (obj) { return obj.end; }, set: function (obj, value) { obj.end = value; } }, metadata: _metadata }, _end_initializers, _end_extraInitializers);
        __esDecorate(null, null, _timezone_decorators, { kind: "field", name: "timezone", static: false, private: false, access: { has: function (obj) { return "timezone" in obj; }, get: function (obj) { return obj.timezone; }, set: function (obj, value) { obj.timezone = value; } }, metadata: _metadata }, _timezone_initializers, _timezone_extraInitializers);
        __esDecorate(null, null, _channel_decorators, { kind: "field", name: "channel", static: false, private: false, access: { has: function (obj) { return "channel" in obj; }, get: function (obj) { return obj.channel; }, set: function (obj, value) { obj.channel = value; } }, metadata: _metadata }, _channel_initializers, _channel_extraInitializers);
        __esDecorate(null, null, _chats_decorators, { kind: "field", name: "chats", static: false, private: false, access: { has: function (obj) { return "chats" in obj; }, get: function (obj) { return obj.chats; }, set: function (obj, value) { obj.chats = value; } }, metadata: _metadata }, _chats_initializers, _chats_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Episode = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Episode = _classThis;
}();
exports.Episode = Episode;
