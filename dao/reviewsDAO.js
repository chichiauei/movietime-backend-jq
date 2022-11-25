import express from "express";
import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {

    static async injectDB(conn){
        if( reviews) {
            return;
        }
        try{
            reviews = await conn.db(process.env.MOVIEREVIEWS_NS).collection('reviews');
        } catch(e) {
            console.log(`Unable to eatablish connection handle in reviewsDA: ${e}`);
        }
    }

    static async addReview(movieId, user, review, date){
        try{
            const reviewDoc = {
                name:user.name,
                user_id: user._id,
                date: date,
                review: review,
                movie_id: ObjectId(movieId)
            }

            return await reviews.insertOne(reviewDoc);
        }

        catch(e){
            console.error(`Unable to post review: ${e}`)
            return {error:e};
        }
    }

    static async updateReview(reviewId, userId, review, date){
        try{
            const UpdateDoc = await reviews.updateOne(
                {
                user_id: userId,
                _id:ObjectId(reviewId)},
                {$set: {review: review, date:date}}
            )

            return UpdateDoc;
        }

        catch(e){
            console.error(`Unable to update review: ${e}`)
            return {error:e};
        }
    }
    

    static async deleteReview(reviewId,userId){
        try {
          
            const deleteRespose = await reviews.deleteOne({
                _id:ObjectId(reviewId),
                user_id: userId,
            });

            return deleteRespose;
          } catch (e) {
            console.error(`Unable to delete review: ${e}`)
            return { error: e }
        }
    }
}