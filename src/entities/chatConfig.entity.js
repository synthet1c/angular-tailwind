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
exports.ChatConfig = void 0;
var typeorm_1 = require("typeorm");
var channel_entity_1 = require("./channel.entity");
var ChatConfig = function () {
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
    var _ruleName_decorators;
    var _ruleName_initializers = [];
    var _ruleName_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _subscriberOnly_decorators;
    var _subscriberOnly_initializers = [];
    var _subscriberOnly_extraInitializers = [];
    var _appliesToVideo_decorators;
    var _appliesToVideo_initializers = [];
    var _appliesToVideo_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _pricePerChar_decorators;
    var _pricePerChar_initializers = [];
    var _pricePerChar_extraInitializers = [];
    var _pricePerVideoSecond_decorators;
    var _pricePerVideoSecond_initializers = [];
    var _pricePerVideoSecond_extraInitializers = [];
    var _maxChars_decorators;
    var _maxChars_initializers = [];
    var _maxChars_extraInitializers = [];
    var _videoLength_decorators;
    var _videoLength_initializers = [];
    var _videoLength_extraInitializers = [];
    var ChatConfig = _classThis = /** @class */ (function () {
        function ChatConfig_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.channel = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _channel_initializers, void 0));
            this.ruleName = (__runInitializers(this, _channel_extraInitializers), __runInitializers(this, _ruleName_initializers, void 0)); // e.g., "Message Length Pricing", "Video Upload"
            this.description = (__runInitializers(this, _ruleName_extraInitializers), __runInitializers(this, _description_initializers, void 0)); // Optional description of the rule
            this.subscriberOnly = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _subscriberOnly_initializers, void 0)); // Optional description of the rule
            this.appliesToVideo = (__runInitializers(this, _subscriberOnly_extraInitializers), __runInitializers(this, _appliesToVideo_initializers, void 0)); // Does this rule apply to video content?
            this.price = (__runInitializers(this, _appliesToVideo_extraInitializers), __runInitializers(this, _price_initializers, void 0)); // Base price for this rule
            this.pricePerChar = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _pricePerChar_initializers, void 0)); // For rules related to message length (optional)
            this.pricePerVideoSecond = (__runInitializers(this, _pricePerChar_extraInitializers), __runInitializers(this, _pricePerVideoSecond_initializers, void 0)); // For rules related to video length (optional)
            this.maxChars = (__runInitializers(this, _pricePerVideoSecond_extraInitializers), __runInitializers(this, _maxChars_initializers, void 0)); // Max allowed characters for this configuration (optional)
            this.videoLength = (__runInitializers(this, _maxChars_extraInitializers), __runInitializers(this, _videoLength_initializers, void 0)); // Max allowed video duration for this configuration (optional)
            __runInitializers(this, _videoLength_extraInitializers);
        }
        return ChatConfig_1;
    }());
    __setFunctionName(_classThis, "ChatConfig");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _channel_decorators = [(0, typeorm_1.ManyToOne)(function () { return channel_entity_1.Channel; }, function (channel) { return channel.chatConfigs; }), (0, typeorm_1.JoinColumn)()];
        _ruleName_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)()];
        _subscriberOnly_decorators = [(0, typeorm_1.Column)("boolean", { default: false })];
        _appliesToVideo_decorators = [(0, typeorm_1.Column)("boolean", { default: false })];
        _price_decorators = [(0, typeorm_1.Column)("decimal", { precision: 10, scale: 2, default: 0 })];
        _pricePerChar_decorators = [(0, typeorm_1.Column)("decimal", { precision: 10, scale: 2, default: 0, nullable: true })];
        _pricePerVideoSecond_decorators = [(0, typeorm_1.Column)("decimal", { precision: 10, scale: 2, default: 0, nullable: true })];
        _maxChars_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _videoLength_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _channel_decorators, { kind: "field", name: "channel", static: false, private: false, access: { has: function (obj) { return "channel" in obj; }, get: function (obj) { return obj.channel; }, set: function (obj, value) { obj.channel = value; } }, metadata: _metadata }, _channel_initializers, _channel_extraInitializers);
        __esDecorate(null, null, _ruleName_decorators, { kind: "field", name: "ruleName", static: false, private: false, access: { has: function (obj) { return "ruleName" in obj; }, get: function (obj) { return obj.ruleName; }, set: function (obj, value) { obj.ruleName = value; } }, metadata: _metadata }, _ruleName_initializers, _ruleName_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _subscriberOnly_decorators, { kind: "field", name: "subscriberOnly", static: false, private: false, access: { has: function (obj) { return "subscriberOnly" in obj; }, get: function (obj) { return obj.subscriberOnly; }, set: function (obj, value) { obj.subscriberOnly = value; } }, metadata: _metadata }, _subscriberOnly_initializers, _subscriberOnly_extraInitializers);
        __esDecorate(null, null, _appliesToVideo_decorators, { kind: "field", name: "appliesToVideo", static: false, private: false, access: { has: function (obj) { return "appliesToVideo" in obj; }, get: function (obj) { return obj.appliesToVideo; }, set: function (obj, value) { obj.appliesToVideo = value; } }, metadata: _metadata }, _appliesToVideo_initializers, _appliesToVideo_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _pricePerChar_decorators, { kind: "field", name: "pricePerChar", static: false, private: false, access: { has: function (obj) { return "pricePerChar" in obj; }, get: function (obj) { return obj.pricePerChar; }, set: function (obj, value) { obj.pricePerChar = value; } }, metadata: _metadata }, _pricePerChar_initializers, _pricePerChar_extraInitializers);
        __esDecorate(null, null, _pricePerVideoSecond_decorators, { kind: "field", name: "pricePerVideoSecond", static: false, private: false, access: { has: function (obj) { return "pricePerVideoSecond" in obj; }, get: function (obj) { return obj.pricePerVideoSecond; }, set: function (obj, value) { obj.pricePerVideoSecond = value; } }, metadata: _metadata }, _pricePerVideoSecond_initializers, _pricePerVideoSecond_extraInitializers);
        __esDecorate(null, null, _maxChars_decorators, { kind: "field", name: "maxChars", static: false, private: false, access: { has: function (obj) { return "maxChars" in obj; }, get: function (obj) { return obj.maxChars; }, set: function (obj, value) { obj.maxChars = value; } }, metadata: _metadata }, _maxChars_initializers, _maxChars_extraInitializers);
        __esDecorate(null, null, _videoLength_decorators, { kind: "field", name: "videoLength", static: false, private: false, access: { has: function (obj) { return "videoLength" in obj; }, get: function (obj) { return obj.videoLength; }, set: function (obj, value) { obj.videoLength = value; } }, metadata: _metadata }, _videoLength_initializers, _videoLength_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ChatConfig = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ChatConfig = _classThis;
}();
exports.ChatConfig = ChatConfig;
