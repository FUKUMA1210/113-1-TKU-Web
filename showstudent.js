const fs = require('fs');
const csv = require('csv-parser');
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const dbName = "412637307";
const collectionName = "studentslist";

(async () => {
    const client = new MongoClient(uri);

    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const students = await collection.find().toArray();
        console.log("學生資料列表：");
        students.forEach(student => {
            console.log(student);
        });

        const departmentStats = await collection.aggregate([
            {
                $group: {
                    _id: "$院系",
                    count: { $sum: 1 }
                }
            },
        ]).toArray();

        console.log("\n各院系人數統計：");
        departmentStats.forEach(stat => {
            console.log(`${stat._id}, 人數: ${stat.count}`);
        });

    } catch (error) {
        console.error("發生錯誤：", error);
    } finally {
        await client.close();
        console.log("已斷開 MongoDB 連接");
    }
})();
