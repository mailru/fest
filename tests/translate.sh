#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
${DIR}/../bin/fest-build --dir=${DIR}/templates --exclude=*error* --out=${DIR}/../tests-compiled --translate=${DIR}/en_US.po
