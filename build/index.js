"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var qrcode_1 = __importDefault(require("qrcode"));
var fs_1 = require("fs");
var path_1 = require("path");
var generateQRCode = function (_a) {
    var text = _a.text, _b = _a.format, format = _b === void 0 ? 'svg' : _b, _c = _a.outPath, outPath = _c === void 0 ? "".concat(__dirname, "/dist") : _c;
    return __awaiter(void 0, void 0, void 0, function () {
        var _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _d = outPath;
                    if (!_d) return [3 /*break*/, 2];
                    return [4 /*yield*/, fs_1.promises.stat(outPath)];
                case 1:
                    _d = !(_f.sent());
                    _f.label = 2;
                case 2:
                    if (!_d) return [3 /*break*/, 4];
                    return [4 /*yield*/, fs_1.promises.mkdir((0, path_1.join)(outPath), { recursive: true })];
                case 3:
                    _f.sent();
                    _f.label = 4;
                case 4:
                    _e = format;
                    switch (_e) {
                        case 'svg': return [3 /*break*/, 5];
                        case 'png': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 5: return [4 /*yield*/, qrcode_1.default.toString(text, { type: 'svg' })];
                case 6: return [2 /*return*/, _f.sent()];
                case 7: return [4 /*yield*/, qrcode_1.default.toDataURL(text)];
                case 8: return [2 /*return*/, _f.sent()];
                case 9: return [4 /*yield*/, qrcode_1.default.toString(text)];
                case 10: return [2 /*return*/, _f.sent()];
            }
        });
    });
};
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var data, output, file;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = "https://kwn.digital";
                    output = "".concat(process.cwd(), "/dist");
                    return [4 /*yield*/, qrcode_1.default.toFile("".concat(output, "/code.svg"), data)];
                case 1:
                    file = _a.sent();
                    return [4 /*yield*/, generateQRCode({ text: data, format: 'svg', outPath: output })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
