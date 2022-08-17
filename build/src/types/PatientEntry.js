"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.gender = void 0;
var gender;
(function (gender) {
    gender["Male"] = "male";
    gender["Female"] = "female";
    gender["Other"] = "other";
})(gender = exports.gender || (exports.gender = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender = exports.Gender || (exports.Gender = {}));
var HealthCheckRating;
(function (HealthCheckRating) {
    HealthCheckRating[HealthCheckRating["Healthy"] = 0] = "Healthy";
    HealthCheckRating[HealthCheckRating["LowRisk"] = 1] = "LowRisk";
    HealthCheckRating[HealthCheckRating["HighRisk"] = 2] = "HighRisk";
    HealthCheckRating[HealthCheckRating["CriticalRisk"] = 3] = "CriticalRisk";
})(HealthCheckRating || (HealthCheckRating = {}));
var EntryType;
(function (EntryType) {
    EntryType["Hospital"] = "Hospital";
    EntryType["OccupationalHealthcare"] = "OccupationalHealthcare";
    EntryType["HealthCheck"] = "HealthCheck";
})(EntryType || (EntryType = {}));
