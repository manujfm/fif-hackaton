'use strict'

import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const ReviewSchema = Schema({
    author: String,
    entityId: String,
    title: String,
    description: String,
    rating: String,
});


export default model('User', ReviewSchema);