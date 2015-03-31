# Replaces the local test cases database by the distant one

USER=paie
DATABASE=paie-tests
DISTANT_DUMP_FOLDER='~/dump'
LOCAL_DUMP_FOLDER='./dump'

cd `dirname $0`

ssh $USER@sgmap.fr "rm -rf $DISTANT_DUMP_FOLDER && mongodump --db $DATABASE" &&
rm -rf $LOCAL_DUMP_FOLDER &&
scp -r $USER@sgmap.fr:$DISTANT_DUMP_FOLDER/$DATABASE $LOCAL_DUMP_FOLDER &&
mongorestore --drop --db $DATABASE $LOCAL_DUMP_FOLDER
